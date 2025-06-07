import React from "react";
import Link from "next/link";

interface PublicLayoutProps {
  children: React.ReactNode;
}

export default function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Main content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-[#111111] py-6 border-t border-purple-800 text-center">
        <p className="text-sm text-gray-400">
          Powered by{" "}
          <Link
            href="https://buildsforge.com"
            target="_blank"
            className="text-purple-400 hover:underline"
          >
            BuildsForge
          </Link>
        </p>
      </footer>
    </div>
  );
}
