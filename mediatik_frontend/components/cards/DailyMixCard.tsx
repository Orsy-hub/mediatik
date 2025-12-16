"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

export const DailyMixCard = ({ mix, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative w-56 flex-shrink-0 cursor-pointer"
    >
      <div
        className="relative aspect-square rounded-2xl overflow-hidden"
        style={{ backgroundColor: mix.color + "20" }}
      >
        <img src={mix.image} alt={mix.name} className="w-full h-full object-cover mix-blend-overlay" />

        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/60" />

        {/* Badge */}
        <div className="absolute top-3 left-3 px-3 py-1 bg-white/90 text-[#1B1B1B] text-xs font-bold rounded-full">
          Mix
        </div>

        {/* Play button */}
        <motion.button
          animate={{
            scale: isHovered ? 1 : 0,
            opacity: isHovered ? 1 : 0,
          }}
          whileHover={{ scale: 1.1 }}
          className="absolute bottom-3 right-3 w-12 h-12 bg-white rounded-full flex items-center justify-center"
        >
          <Play className="w-5 h-5 text-[#1B1B1B] ml-1" fill="currentColor" />
        </motion.button>

        {/* Infos */}
        <div className="absolute bottom-0 p-4">
          <h3 className="font-bold text-sm">{mix.name}</h3>
          <p className="text-xs text-white/80">{mix.genres.join(", ")}</p>
        </div>
      </div>
    </motion.div>
  );
};
