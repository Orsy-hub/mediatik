"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

export const ContinueCard = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ y: -5 }}
      className="w-80 flex-shrink-0 bg-white/5 hover:bg-white/10 rounded-2xl p-4 cursor-pointer"
    >
      {/* Header */}
      <div className="flex items-center gap-4 mb-4">
        <div className="w-16 h-16 rounded-lg overflow-hidden">
          <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-sm truncate">{item.title}</h3>
          <p className="text-xs text-white/60">{item.currentTrack}</p>
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          className="w-10 h-10 bg-[#16FF6E] rounded-full flex items-center justify-center"
        >
          <Play className="w-5 h-5 text-[#1B1B1B]" fill="currentColor" />
        </motion.button>
      </div>

      {/* Progress Bar */}
      <div className="space-y-2">
        <p className="text-xs text-white/50">{item.progress}% écouté</p>

        <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${item.progress}%` }}
            transition={{ duration: 0.6 }}
            className="h-full bg-[#16FF6E] rounded-full"
          />
        </div>
      </div>
    </motion.div>
  );
};
