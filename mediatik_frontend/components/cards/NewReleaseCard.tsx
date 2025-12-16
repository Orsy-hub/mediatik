"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

export const NewReleaseCard = ({ release, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="cursor-pointer"
    >
      <div className="relative aspect-square rounded-xl overflow-hidden">
        <img src={release.image} alt={release.title} className="w-full h-full object-cover" />

        {/* Badge */}
        <motion.div
          className={`absolute top-3 left-3 px-3 py-1 text-white text-xs font-bold rounded-full ${
            release.type === "Album"
              ? "bg-[#FF4BC3]"
              : release.type === "Single"
              ? "bg-[#16FF6E] text-[#1B1B1B]"
              : "bg-[#C05CFF]"
          }`}
        >
          {release.type}
        </motion.div>

        {/* Fade + Play */}
        <motion.button
          animate={{ scale: isHovered ? 1 : 0, opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-black/40 flex items-center justify-center"
        >
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
            <Play className="w-7 h-7 text-[#1B1B1B]" fill="currentColor" />
          </div>
        </motion.button>

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      </div>

      {/* Infos */}
      <div className="mt-3">
        <h3 className="font-semibold text-sm truncate">{release.title}</h3>
        <p className="text-xs text-white/60 truncate">{release.artist}</p>
        <p className="text-xs text-[#16FF6E] mt-1">{release.date}</p>
      </div>
    </motion.div>
  );
};
