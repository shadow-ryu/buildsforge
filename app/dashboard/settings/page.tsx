"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// Fetch user settings from API
const fetchSettings = async () => {
  const { data } = await axios.get("/api/settings");
  return data;
};

export default function SettingsPage() {
  const { data: settings, isLoading } = useQuery({
    queryKey: ["user-settings"],
    queryFn: fetchSettings,
  });

  const [dailyHours, setDailyHours] = useState(2);
  const [deadlineDays, setDeadlineDays] = useState(14);
  const [aiModel, setAiModel] = useState("gpt-4");
  // const [emailNudges, setEmailNudges] = useState(true); .
  const [isPublic, setIsPublic] = useState(false);
  const [slug, setSlug] = useState("");
  const [bio, setBio] = useState("");
  const [twitter, setTwitter] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

  // Populate states when data is available
  useEffect(() => {
    if (!settings?.data) return;

    const s = settings.data.settings;
    setDailyHours(s.dailyHours);
    setDeadlineDays(s.deadlineDays);
    setAiModel(s.aiModel);
    // setEmailNudges(s.emailNudges);
    setIsPublic(s.isPublic);
    setSlug(s.slug);
    setBio(s.bio);
    setTwitter(s.twitter);
    setName(settings.data.name);
    setUsername(settings.data.username);
  }, [settings?.data]);

  if (isLoading || !settings?.data) {
    return (
      <div className="flex items-center justify-center h-screen text-white">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500 mr-4"></div>
        <span className="text-lg">Loading settings...</span>
      </div>
    );
  }

  const usage = settings.data.usage;
  const handleUpdate = async () => {};
  return (
    <div className="min-h-screen w-4xl md:w-full px-4 md:px-10 py-10 bg-[#0f0f11] text-white">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>

      <Tabs
        defaultValue="profile"
        className="md:max-w-4xl space-y-8 flex text-white"
      >
        <TabsList className="bg-[#181A20] flex wrap max-w-[350px] overflow-x-auto md:max-w-full md:flex-row data-[state=active]:text-purple-800 border border-purple-800 flex gap-1">
          <TabsTrigger
            value="profile"
            className="text-white data-[state=active]:text-purple-800"
          >
            Profile
          </TabsTrigger>
          <TabsTrigger
            value="preferences"
            className="text-white data-[state=active]:text-purple-800"
          >
            Preferences
          </TabsTrigger>
          <TabsTrigger
            value="billing"
            className="text-white data-[state=active]:text-purple-800"
          >
            Billing
          </TabsTrigger>
          <TabsTrigger
            value="usage"
            className="text-white data-[state=active]:text-purple-800"
          >
            Usage
          </TabsTrigger>
          <TabsTrigger
            value="security"
            className="text-white data-[state=active]:text-purple-800"
          >
            Security
          </TabsTrigger>
          <TabsTrigger
            value="public"
            className="text-white data-[state=active]:text-purple-800"
          >
            Public Profile
          </TabsTrigger>
        </TabsList>

        {/* PROFILE */}
        <TabsContent value="profile">
          <Card className="bg-[#181A20] border border-purple-800">
            <CardHeader>
              <CardTitle className="text-white">Profile</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <label className="text-white">Full Name</label>
              <Input
                value={name}
                placeholder="Full Name"
                className="text-white"
                onChange={(e) => setName(e.target.value)}
              />
              <label className="text-white">Email</label>
              <Input
                value={settings?.data.email}
                placeholder="Email"
                className="text-white"
                disabled
                readOnly
              />
              <label className="text-white">Username</label>
              <Input
                value={username}
                placeholder="username"
                className="text-white"
                onChange={(e) => setUsername(e.target.value)}
              />
              <Button
                className="bg-purple-800 hover:bg-purple-700"
                onClick={handleUpdate}
              >
                Update
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* PREFERENCES */}
        <TabsContent value="preferences">
          <Card className="bg-[#181A20] border border-purple-800">
            <CardHeader>
              <CardTitle className="text-white">Preferences</CardTitle>
              <CardDescription className="text-gray-400">
                Customize your product
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="text-sm text-purple-300">
                  🕒 Daily Commitment (hrs/day)
                </label>
                <Input
                  type="number"
                  min={0.25}
                  step={0.25}
                  className="text-white"
                  value={dailyHours}
                  onChange={(e) => setDailyHours(Number(e.target.value))}
                  disabled={isLoading}
                />
              </div>

              <div>
                <label className="text-sm text-purple-300">
                  📅 Default Deadline Range (days)
                </label>
                <select
                  value={deadlineDays}
                  onChange={(e) => setDeadlineDays(Number(e.target.value))}
                  className="w-full bg-transparent text-white rounded-md border border-purple-800 px-3 py-2"
                  disabled={isLoading}
                >
                  {[7, 14, 30].map((d) => (
                    <option key={d} value={d}>
                      {d} days
                    </option>
                  ))}
                </select>
              </div>

              {/* <div> */}
              {/* <label className="text-sm text-purple-300">
                  🤖 Preferred AI Model
                </label>
                <select
                  value={aiModel}
                  onChange={(e) => setAiModel(e.target.value)}
                  className="w-full bg-black text-white rounded-md border border-purple-800 px-3 py-2"
                  disabled
                >
                  <option value="gpt-4">GPT</option>
                  <option value="gemini">Gemini</option>
                </select>
              </div> */}

              <Button className="bg-purple-600 text-white hover:bg-purple-700">
                Save Preferences
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* BILLING */}
        <TabsContent value="billing">
          <Card className="bg-[#181A20] border border-purple-800">
            <CardHeader>
              <CardTitle className="text-white">Billing</CardTitle>
              <CardDescription className="text-gray-400">
                Subscription info
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-white">
                💳 Current Plan: <span className="text-purple-300">Free</span>
              </p>
              <p className="text-white">
                ⏱️ Trial:{" "}
                <span className="text-purple-300">5 days remaining</span>
              </p>
              <Button className="bg-purple-600 hover:bg-purple-700">
                Manage Subscription
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* USAGE */}
        <TabsContent value="usage">
          <Card className="bg-[#181A20] border border-purple-800">
            <CardHeader>
              <CardTitle className="text-white">Usage Analytics</CardTitle>
              <CardDescription className="text-gray-400">
                Track your activity
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <UsageStat
                label="📊 Tokens used this month"
                value={usage.tokens.toLocaleString()}
              />
              <UsageStat
                label="📦 Products created"
                value={usage.products.toString()}
              />
              <UsageStat
                label="✅ Ai generations"
                value={usage.aiGenerations.toString()}
              />
            </CardContent>
          </Card>
        </TabsContent>

        {/* SECURITY */}
        <TabsContent value="security">
          <Card className="bg-[#181A20] border border-red-900">
            <CardHeader>
              <CardTitle className="text-red-500">Delete Account</CardTitle>
              <CardDescription className="text-red-300">
                Delete all your data
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 w-[50%]">
              <Button variant="destructive" className="w-full">
                🧼 Delete My Account
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* PUBLIC PROFILE */}
        <TabsContent value="public">
          <Card className="bg-[#181A20] border border-purple-800">
            <CardHeader>
              <CardTitle className="text-white">Public Profile</CardTitle>
              <CardDescription className="text-gray-400">
                Control your public builder presence
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-white">🔓 Make my build logs public</span>
                <Switch
                  checked={isPublic}
                  onCheckedChange={setIsPublic}
                  className="data-[state=checked]:bg-purple-500"
                  disabled={isLoading}
                />
              </div>
              <label htmlFor="slug" className="text-white">Public slug</label>
              <Input
                placeholder="e.g. /u/briefbox"
                value={slug}
                className="text-white"
                onChange={(e) => setSlug(e.target.value)}
                disabled={isLoading}
              />
              <label htmlFor="bio" className="text-white">Short bio / status</label>
              <Input
                placeholder="Short bio / status"
                value={bio}
                className="text-white"
                onChange={(e) => setBio(e.target.value)}
                disabled={isLoading}
              />
              <label htmlFor="twitter" className="text-white">Twitter handle (optional)</label>
              <Input
                placeholder="@username"
                value={twitter}
                className="text-white"
                onChange={(e) => setTwitter(e.target.value)}
                disabled={isLoading}
              />
              <Button className="bg-purple-600 text-white hover:bg-purple-700">
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
