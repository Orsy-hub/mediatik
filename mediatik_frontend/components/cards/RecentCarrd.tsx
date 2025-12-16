"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Clock, MoreVertical } from "lucide-react";

export const RecentCard = ({ song, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="flex items-center gap-4 bg-white/5 hover:bg-white/10 rounded-xl p-3 cursor-pointer transition-all group"
    >
      {/* Image */}
      <div className="relative w-14 h-14 rounded-lg overflow-hidden flex-shrink-0">
        <img src={song.image} alt={song.title} className="w-full h-full object-cover" />

        {/* Hover Play */}
        <motion.div
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-black/50 flex items-center justify-center"
        >
          <Play className="w-6 h-6" fill="white" />
        </motion.div>
      </div>

      {/* Infos */}
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-sm truncate">{song.title}</h3>
        <p className="text-xs text-white/60 truncate">{song.artist}</p>
      </div>

      {/* Time + menu */}
      <div className="flex items-center gap-3 text-white/60">
        <Clock className="w-4 h-4" />
        <span className="text-xs">{song.duration}</span>
        <MoreVertical className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </motion.div>
  );
};
