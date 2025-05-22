"use client";

import Topbar from "@/components/TopBar";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-black">
      <Topbar />

      {/* Page content will go here */}
      <div className="container mx-auto">{/* Empty page for now */}</div>
    </div>
  );
}
