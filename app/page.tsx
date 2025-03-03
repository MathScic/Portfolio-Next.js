"use client";

import { motion } from "framer-motion";
import Banner from "@/components/Banner";
import Valor from "@/components/Valor";
import { useInView } from "react-intersection-observer";

export default function Home() {
  // Observer pour la section Banner
  const { ref: bannerRef, inView: bannerInView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // 20% visible avant d'activer l'animation
  });

  // Observer pour la section Valor
  const { ref: valorRef, inView: valorInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#ffc299] to-[#ffffff] flex flex-col">
      {/* Section Banner avec animation au scroll */}
      <motion.div
        ref={bannerRef}
        className="flex flex-col items-center justify-center min-h-screen"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: bannerInView ? 1 : 0, y: bannerInView ? 0 : 50 }}
        transition={{ duration: 1 }}
      >
        <Banner />
      </motion.div>

      {/* Section Valor avec animation au scroll */}
      <motion.div
        ref={valorRef}
        className="w-full text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: valorInView ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <Valor />
      </motion.div>
    </div>
  );
}
