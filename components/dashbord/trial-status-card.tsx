"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useMemo } from "react";
import { formatDistanceToNowStrict, isAfter } from "date-fns";
import { useRouter } from "next/navigation";

type TrialStatusCardProps = {
  trial: {
    plan: "NORMAL" | "PRO" | "ENTERPRISE";
    startDate: string;
    endDate: string;
    expired: boolean;
  };
};

export default function TrialStatusCard({ trial }: TrialStatusCardProps) {
  const router = useRouter();

  const trialEndsIn = useMemo(() => {
    const end = new Date(trial.endDate);
    if (isAfter(new Date(), end)) return "Expired";
    return formatDistanceToNowStrict(end, { addSuffix: true });
  }, [trial.endDate]);

  const handleUpgrade = () => {
    router.push("/plans");
  };

  return (
    <Card className="bg-[#1a1b22] border border-purple-800 text-white shadow-md w-full max-w-xl">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-white text-lg">Trial Status</CardTitle>
            <CardDescription className="text-purple-300">
              You’re currently on a free trial.
            </CardDescription>
          </div>
          <Badge
            className={`${
              trial.expired
                ? "bg-red-700 text-white"
                : "bg-purple-700 text-white"
            }`}
          >
            {trial.expired ? "Expired" : "Trial"}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="mt-2 space-y-3">
        <div className="text-sm text-gray-400">
          {trial.expired ? (
            "Your trial has ended. Upgrade to continue using premium features."
          ) : (
            <>
              Trial ends{" "}
              <span className="text-purple-300 font-semibold">
                {trialEndsIn}
              </span>
              .
            </>
          )}
        </div>

        <Button
          className="bg-purple-600 hover:bg-purple-700 text-white w-full mt-2"
          onClick={handleUpgrade}
        >
          {trial.expired ? "Subscribe Now" : "Upgrade to Pro"}
        </Button>
      </CardContent>
    </Card>
  );
}
