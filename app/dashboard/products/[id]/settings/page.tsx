"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Loader2, Trash2 } from "lucide-react";

type ProductSettings = {
  id?: string;
  roadmapPublic: boolean;
  buildLogsPublic: boolean;
  detailsPublic: boolean;
};

type Product = {
  id: string;
  name: string;
  slug: string;
  description: string;
  settings: ProductSettings | null;
};

export default function ProductSettingsPage() {
  const { id } = useParams() as { id: string };
  const router = useRouter();
  const queryClient = useQueryClient();

  // Fetch product data
  const { data: product, isLoading } = useQuery({
    queryKey: ["product-settings", id],
    queryFn: async () => {
      const res = await fetch(`/api/products/${id}/settings`);
      if (!res.ok) throw new Error("Failed to fetch product settings");
      return res.json() as Promise<Product>;
    },
  });

  const handleSlugChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateMutation.mutate({ slug: e.target.value });
  };

  // Update mutation
  const updateMutation = useMutation({
    mutationFn: async (data: {
      name?: string;
      settings?: Partial<ProductSettings>;
      slug?: string;
      description?: string;
    }) => {
      const response = await fetch(`/api/products/${id}/settings`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Failed to update settings");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["product-settings", id] });
      toast.success("Settings updated");
    },
    onError: () => {
      toast.error("Failed to update settings");
    },
  });

  // Delete mutation
  const deleteMutation = useMutation({
    mutationFn: async () => {
      const response = await fetch(`/api/products/${id}/settings`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete product");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      router.push("/dashboard/products");
      toast.success("Product deleted");
    },
    onError: () => {
      toast.error("Failed to delete product");
    },
  });

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateMutation.mutate({ name: e.target.value });
  };

  const handleSettingChange = (
    setting: keyof ProductSettings,
    value: boolean
  ) => {
    updateMutation.mutate({
      settings: {
        ...(product?.settings || {}),
        [setting]: value,
      },
    });
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateMutation.mutate({ description: e.target.value });
  };
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  const settings = product.settings || {
    roadmapPublic: false,
    buildLogsPublic: false,
    detailsPublic: false,
  };

  return (
    <div className="space-y-6 mx-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Product Settings</h1>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive" disabled={deleteMutation.isPending}>
              {deleteMutation.isPending ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Trash2 className="mr-2 h-4 w-4" />
              )}
              Delete Product
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete the
                product and all associated data.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                onClick={() => deleteMutation.mutate()}
                className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                disabled={deleteMutation.isPending}
              >
                {deleteMutation.isPending ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : null}
                Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>General</CardTitle>
          <CardDescription>
            Update your product name and visibility settings
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="product-name">Product Name</Label>
            <Input
              id="product-name"
              defaultValue={product.name}
              onBlur={(e) => handleNameChange(e)}
              disabled={updateMutation.isPending}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="product-slug">Product Slug</Label>
            <Input
              id="product-slug"
              defaultValue={product.slug}
              onBlur={(e) => handleSlugChange(e)}
              disabled={updateMutation.isPending}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="product-description">Product Description</Label>
            <Input
              id="product-description"
              defaultValue={product.description}
              onBlur={(e) => handleDescriptionChange(e)}
              disabled={updateMutation.isPending}
            />
          </div>

          <div className="space-y-4">
            <h3 className="font-medium">Visibility Settings</h3>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="roadmap-public">Make Roadmap Public</Label>
                <p className="text-sm text-muted-foreground">
                  Allow anyone with the link to view your product roadmap
                </p>
              </div>
              <Switch
                id="roadmap-public"
                checked={settings.roadmapPublic}
                onCheckedChange={(checked) =>
                  handleSettingChange("roadmapPublic", checked)
                }
                disabled={updateMutation.isPending}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="buildlogs-public">Make Build Logs Public</Label>
                <p className="text-sm text-muted-foreground">
                  Allow anyone with the link to view your build logs
                </p>
              </div>
              <Switch
                id="buildlogs-public"
                checked={settings.buildLogsPublic}
                onCheckedChange={(checked) =>
                  handleSettingChange("buildLogsPublic", checked)
                }
                disabled={updateMutation.isPending}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="details-public">
                  Make Product Details Public
                </Label>
                <p className="text-sm text-muted-foreground">
                  Show product description and details to the public
                </p>
              </div>
              <Switch
                id="details-public"
                checked={settings.detailsPublic}
                onCheckedChange={(checked) =>
                  handleSettingChange("detailsPublic", checked)
                }
                disabled={updateMutation.isPending}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
