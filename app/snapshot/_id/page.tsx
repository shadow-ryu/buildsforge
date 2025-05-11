import React from "react";

export default function PublicSnapshotPage({ params }: { params: { id: string } }) {
  // TODO: Fetch snapshot data from backend
  return (
    <div className="max-w-xl mx-auto py-12 text-center">
      <h1 className="text-2xl font-bold mb-2">Product Name</h1>
      <div className="mb-2 text-[#fbbf24]">Day X of Build Streak</div>
      <div className="bg-[#23262F] p-6 rounded mb-4">Snapshot content goes here.</div>
      <div className="flex justify-center gap-2 mb-4">
        <button className="bg-primary text-primary-foreground px-4 py-2 rounded">Share on Twitter</button>
        <button className="bg-secondary text-secondary-foreground px-4 py-2 rounded">Share on LinkedIn</button>
      </div>
      <div className="mt-4 text-xs text-[#A1A1AA]">Embed code / badge coming soon</div>
    </div>
  );
}
