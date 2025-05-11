import React from "react";

export default function SettingsPage() {
  // TODO: Integrate with backend for user profile, notifications, delete
  return (
    <div className="max-w-xl mx-auto py-12 bg-[#181A20] rounded-lg shadow-lg border border-[#23262F]">
      <h1 className="text-2xl font-bold mb-6 text-[#F4F4F5]">Settings & Profile</h1>
      <form className="space-y-4">
        <input className="w-full p-2 rounded bg-[#23262F] text-[#F4F4F5] placeholder-[#71717A] border border-[#23262F] focus:ring-2 focus:ring-[#FBBF24]" placeholder="Name" />
        <input className="w-full p-2 rounded bg-background text-foreground" placeholder="Bio" />
        <input className="w-full p-2 rounded bg-background text-foreground" placeholder="Links (comma separated)" />
        <input className="w-full p-2 rounded bg-background text-foreground" placeholder="Twitter" />
        <input className="w-full p-2 rounded bg-background text-foreground" placeholder="LinkedIn" />
        <input className="w-full p-2 rounded bg-background text-foreground" placeholder="GitHub" />
        <div>
          <label className="block mb-1">Notification Preferences</label>
          <select className="w-full p-2 rounded bg-background text-foreground">
            <option>Email</option>
            <option>SMS</option>
            <option>Push</option>
          </select>
        </div>
        <button className="bg-[#FBBF24] text-[#181A20] font-bold px-4 py-2 rounded hover:bg-[#fbbf24]/90 transition">Delete Account</button>
      </form>
    </div>
  );
}
