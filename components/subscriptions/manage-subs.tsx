/* eslint-disable @typescript-eslint/no-explicit-any */
// components/subscriptions/manage-subs.tsx
"use client";

import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";
import { toast } from "sonner";

export default function ManageSubs() {
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();

  // Subscription query
  const {
    data: subscriptionData,
    isLoading: isSubscriptionLoading,
    error: subscriptionError,
  } = useQuery({
    queryKey: ["subscription"],
    queryFn: async () => {
      const { data } = await axios.get("/api/subscription");
      return data;
    },
    enabled: open,
  });

  // Invoices query
  const {
    data: invoicesData,
    isLoading: isInvoicesLoading,
    error: invoicesError,
  } = useQuery({
    queryKey: ["subscription-invoices"],
    queryFn: async () => {
      const { data } = await axios.get("/api/subscription/invoices");
      return data.invoices || [];
    },
    enabled: open && !!subscriptionData?.subscription,
  });

  // Cancel subscription mutation
  const cancelSubscription = useMutation({
    mutationFn: async () => {
      await axios.post("/api/subscription/cancel");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["subscription"] });
      toast.success("Subscription cancelled successfully");
    },
    onError: (error) => {
      console.error("Failed to cancel subscription:", error);
      toast.error("Failed to cancel subscription");
    },
  });

  const handleCancel = async () => {
    if (!confirm("Are you sure you want to cancel your subscription?")) return;
    await cancelSubscription.mutateAsync();
  };

  const subscription = subscriptionData?.subscription;
  const lemonData = subscriptionData?.lemon?.data?.attributes;
  const isLoading = isSubscriptionLoading || isInvoicesLoading;
  const error = subscriptionError || invoicesError;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-purple-700 hover:bg-purple-600">
          Manage Subscription
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-black text-white border border-purple-800 max-w-md">
        <DialogHeader>
          <DialogTitle>Manage Subscription</DialogTitle>
        </DialogHeader>

        {isLoading ? (
          <div className="flex items-center justify-center py-10">
            <Loader className="animate-spin text-purple-500" />
          </div>
        ) : error ? (
          <p className="text-red-400">Error loading subscription data</p>
        ) : !subscription ? (
          <p className="text-gray-400">No active subscription found.</p>
        ) : (
          <div className="space-y-4 text-sm">
            <p>
              <strong>Plan:</strong> {subscription.planName}
            </p>
            <p>
              <strong>Status:</strong> {subscription.status}
            </p>
            <p>
              <strong>Renews On:</strong>{" "}
              {new Date(subscription.currentPeriodEnd).toLocaleDateString()}
            </p>
            {lemonData?.status_formatted && (
              <p>
                <strong>LemonSqueezy Status:</strong>{" "}
                {lemonData.status_formatted}
              </p>
            )}

            <div className="flex flex-col gap-3 pt-4">
              {invoicesData && invoicesData.length > 0 ? (
                <div className="space-y-1">
                  <p className="text-sm text-purple-300 font-medium">
                    Invoices
                  </p>
                  {invoicesData.map((inv: any) => (
                    <div key={inv.id} className="flex justify-between">
                      <span>
                        {new Date(
                          inv.attributes.created_at
                        ).toLocaleDateString()}{" "}
                        — {inv.attributes.status_formatted}
                      </span>
                      <a
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open("/api/subscription/invoice", "_blank");
                        }}
                        target="_blank"
                        rel="noreferrer"
                      >
                        View
                      </a>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-400">No invoices found</p>
              )}

              {subscription.status === "active" && (
                <Button
                  onClick={handleCancel}
                  variant="destructive"
                  className="w-full"
                  disabled={cancelSubscription.isPending}
                >
                  {cancelSubscription.isPending ? (
                    <Loader className="mr-2 h-4 w-4 animate-spin" />
                  ) : null}
                  Cancel Subscription
                </Button>
              )}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
