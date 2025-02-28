"use client";

import { motion } from "framer-motion";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#ffc299] to-[#ffffff] flex flex-col">
      <motion.div
        className="flex flex-col items-center justify-center min-h-screen"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        <Banner />
      </motion.div>
    </div>
  );
}
