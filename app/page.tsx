"use client";
import NavBar from "@/components/navbar";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-black">
      <NavBar />
      <Hero />
      <div className="container mx-auto">{/* Empty page for now */}</div>
    </div>
  );
}
