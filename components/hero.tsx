"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { ColourfulText } from "@/components/ui/colorful-text";

export function Hero() {
  return (
    <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col overflow-hidden pt-20 md:pt-40">
      {" "}
      <motion.h1
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        className="relative z-10 mx-auto mt-6 max-w-6xl text-center text-2xl font-semibold md:text-4xl lg:text-8xl"
      >
        <span className="inline-flex items-baseline font-semibold">
          <ColourfulText text="Kingdom" />
        </span>{" "}
        <span className="text-black dark:text-white">of Velyn</span>
      </motion.h1>
      <motion.p
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.5, delay: 0.2 }}
        className="relative z-10 mx-auto mt-6 max-w-3xl text-center text-base text-foreground md:text-xl dark:text-foreground"
      >
        Join our thriving community of adventurers in the legendary Kingdom of
        Velyn! Experience epic quests, forge lasting friendships, and create
        unforgettable stories together. Our welcoming community awaits your
        arrival in this magical realm.
      </motion.p>
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.5, delay: 0.4 }}
        className="relative z-10 mt-6 flex items-center justify-center gap-4"
      >
        <RainbowButton size="lg" className="dark:text-black">
          Join our Discord
        </RainbowButton>
      </motion.div>{" "}
      <div className="relative mt-20 rounded-[32px] border border-border bg-secondary p-4 dark:border-border dark:bg-secondary">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 w-full scale-[1.1] bg-gradient-to-b from-transparent via-background to-background dark:via-background/50 dark:to-background" />
        <div className="rounded-[24px] border border-border bg-card p-2 dark:border-border dark:bg-card">
          <Image
            src="/heroimage.jpg"
            alt="Hero image"
            width={1920}
            height={1080}
            className="rounded-[20px]"
          />
        </div>
      </div>
    </div>
  );
}

// Both Badge and Button components removed as they're no longer used

export default Hero;
