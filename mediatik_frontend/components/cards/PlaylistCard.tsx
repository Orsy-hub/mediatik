"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Play } from "lucide-react";

export const PlaylistCard = ({ playlist, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [liked, setLiked] = useState(playlist.liked);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative flex-shrink-0 w-64 cursor-pointer"
    >
      <div className="relative aspect-square rounded-2xl overflow-hidden">
        <img src={playlist.image} alt={playlist.title} className="w-full h-full object-cover" />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Play button */}
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: isHovered ? 1 : 0,
            opacity: isHovered ? 1 : 0,
          }}
          whileHover={{ scale: 1.1 }}
          className="absolute bottom-4 right-4 w-14 h-14 bg-[#16FF6E] rounded-full flex items-center justify-center shadow-xl"
        >
          <Play className="w-6 h-6 text-[#1B1B1B] ml-1" fill="currentColor" />
        </motion.button>

        {/* Infos */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="font-bold text-lg">{playlist.title}</h3>
          <p className="text-xs text-white/80">{playlist.description}</p>
          <p className="text-xs text-white/60 mt-2">{playlist.tracks} titres</p>
        </div>

        {/* Like button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.stopPropagation();
            setLiked(!liked);
          }}
          className="absolute top-4 right-4 z-10"
        >
          <Heart
            className={`w-6 h-6 transition-colors ${
              liked ? "fill-[#FF4BC3] text-[#FF4BC3]" : "text-white"
            }`}
          />
        </motion.button>
      </div>
    </motion.div>
  );
};
