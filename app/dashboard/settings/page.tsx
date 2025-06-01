// File: app/settings/page.tsx
"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Button, buttonVariants } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import ManageSubs from "@/components/subscriptions/manage-subs";
import Link from "next/link";
import { cn } from "@/lib/utils";

const fetchSettings = async () => {
  const { data } = await axios.get("/api/settings");
  return data;
};

export default function SettingsPage() {
  const queryClient = useQueryClient();
  const { data: settings, isLoading } = useQuery({
    queryKey: ["user-settings"],
    queryFn: fetchSettings,
  });

  const [dailyHours, setDailyHours] = useState(2);
  const [deadlineDays, setDeadlineDays] = useState(14);
  // const [aiModel] = useState("gpt-4");
  const [isPublic, setIsPublic] = useState(false);
  const [slug, setSlug] = useState("");
  const [bio, setBio] = useState("");
  const [twitter, setTwitter] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (!settings?.data) return;
    const s = settings.data.settings;
    setDailyHours(s.dailyHours);
    setDeadlineDays(s.deadlineDays);
    setIsPublic(s.isPublic);
    setSlug(s.slug || "");
    setBio(s.bio || "");
    setTwitter(s.twitter || "");
    setName(settings.data.name || "");
    setUsername(settings.data.username || "");
  }, [settings?.data]);

  const mutation = useMutation({
    mutationFn: async (payload: {
      name: string;
      username: string;
      bio: string;
      dailyHours: number;
      deadlineDays: number;
      isPublic: boolean;
      slug: string;
      twitter: string;
    }) => {
      const { data } = await axios.post("/api/settings", payload);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user-settings"] });
    },
  });

  const handleUpdate = () => {
    mutation.mutate({
      name,
      username,
      bio,
      dailyHours,
      deadlineDays,
      isPublic,
      slug,
      twitter,
    });
  };

  if (isLoading || !settings?.data) {
    return (
      <div className="flex items-center justify-center h-screen text-white">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500 mr-4"></div>
        <span className="text-lg">Loading settings...</span>
      </div>
    );
  }

  const usage = settings.data.usage;

  return (
    <div className="min-h-screen w-4xl md:w-full px-4 md:px-10 py-10 bg-[#0f0f11] text-white">
      <h1 className="text-3xl font-bold mb-6 text-white">Settings</h1>

      <Tabs
        defaultValue="profile"
        className="md:max-w-4xl space-y-8 flex text-white"
      >
        <TabsList className="bg-[#181A20] flex wrap max-w-[350px] overflow-x-auto md:max-w-full md:flex-row border border-purple-800 gap-1 text-white">
          <TabsTrigger
            value="profile"
            className="text-white data-[state=active]:text-purple-500"
          >
            Profile
          </TabsTrigger>
          <TabsTrigger
            value="preferences"
            className="text-white data-[state=active]:text-purple-500"
          >
            Preferences
          </TabsTrigger>
          <TabsTrigger
            value="billing"
            className="text-white data-[state=active]:text-purple-500"
          >
            Billing
          </TabsTrigger>
          <TabsTrigger
            value="usage"
            className="text-white data-[state=active]:text-purple-500"
          >
            Usage
          </TabsTrigger>
          {/* <TabsTrigger
            value="security"
            className="text-white data-[state=active]:text-purple-500"
          >
            Security
          </TabsTrigger> */}
          <TabsTrigger
            value="public"
            className="text-white data-[state=active]:text-purple-500"
          >
            Public Profile
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <Card className="bg-[#181A20] border border-purple-800">
            <CardHeader>
              <CardTitle className="text-white">Profile</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <label className="text-white">Full Name</label>
              <Input
                className="bg-transparent text-white border border-purple-800"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label className="text-white">Email</label>
              <Input
                className="bg-transparent text-white border border-purple-800"
                value={settings?.data.email}
                disabled
                readOnly
              />
              <label className="text-white">Username</label>
              <Input
                value={username}
                className="bg-transparent text-white border border-purple-800"
                onChange={(e) => setUsername(e.target.value)}
              />
              <Button onClick={handleUpdate}>Update</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="preferences">
          <Card className="bg-[#181A20] border border-purple-800">
            <CardHeader>
              <CardTitle className="text-white">Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <label className="text-white">Daily Hours</label>
              <Input
                type="number"
                className="bg-transparent text-white border border-purple-800"
                value={dailyHours}
                onChange={(e) => setDailyHours(Number(e.target.value))}
              />
              <label className="text-white">Deadline Days</label>
              <select
                value={deadlineDays}
                onChange={(e) => setDeadlineDays(Number(e.target.value))}
                className="w-full bg-transparent text-white border border-purple-800 px-3 py-2 rounded"
              >
                {[7, 14, 30].map((d) => (
                  <option key={d} value={d}>
                    {d} days
                  </option>
                ))}
              </select>
              <Button onClick={handleUpdate}>Save Preferences</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="billing">
          <Card className="bg-[#181A20] border border-purple-800">
            <CardHeader>
              <CardTitle className="text-white">Billing</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                <span className="text-white">Current Plan:</span>{" "}
                <span className="text-purple-300">
                  {settings?.data.subscriptions?.name}
                </span>
              </p>
              <span className="text-white">Features:</span>
              <div className="flex flex-col gap-1 mx-4">
                <ul className="text-white list-disc">
                  {settings?.data.subscriptions?.features?.map((f: string) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
              {settings?.data.subscriptions?.productId === "111111" ? (
                <Link
                  className={cn(
                    "text-purple-300 hover:text-purple-400 transition-colors",
                    buttonVariants({ variant: "secondary" })
                  )}
                  href="/dashboard/plans"
                >
                  Upgrade
                </Link>
              ) : (
                <ManageSubs />
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="usage">
          <Card className="bg-[#181A20] border border-purple-800">
            <CardHeader>
              <CardTitle className="text-white">Usage</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <UsageStat
                label="Tokens used"
                value={usage.tokens.toLocaleString()}
              />
              <UsageStat
                label="Products created"
                value={usage.products.toString()}
              />
              <UsageStat
                label="AI generations"
                value={usage.aiGenerations.toString()}
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="public">
          <Card className="bg-[#181A20] border border-purple-800">
            <CardHeader>
              <CardTitle className="text-white">Public Profile</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-white">Make my build logs public</span>
                <Switch
                  className=" data-[state=checked]:bg-purple-500"
                  checked={isPublic}
                  onCheckedChange={setIsPublic}
                />
              </div>
              <label className="text-white">Slug</label>
              <Input
                className="bg-transparent text-white border border-purple-800"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
              />
              <label className="text-white">Bio</label>
              <Input
                className="bg-transparent text-white border border-purple-800"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              />
              <label className="text-white">Twitter</label>
              <Input
                className="bg-transparent text-white border border-purple-800"
                value={twitter}
                onChange={(e) => setTwitter(e.target.value)}
              />
              <Button
                className="bg-purple-500 hover:bg-purple-600"
                onClick={handleUpdate}
              >
                Save Public Settings
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function UsageStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between text-sm">
      <span className="text-gray-400">{label}</span>
      <span className="text-purple-300">{value}</span>
    </div>
  );
}
