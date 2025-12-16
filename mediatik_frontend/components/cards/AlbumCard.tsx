"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import React, { useState } from "react";

interface AlbumCardProps {
  album: {
    id: number;
    titre: string;
    artist: string;
    annee: string;
    image: string;
  };
  index: number;
}

export const AlbumCard = ({ album, index }: AlbumCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative flex-shrink-0 w-56 group cursor-pointer"
    >
      <div className="relative aspect-square rounded-2xl overflow-hidden">
        <img 
          src={album.image} 
          alt={album.titre}
          className="w-full h-full object-cover"
        />

        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute top-3 left-3 px-3 py-1 bg-[#FF4BC3] text-white text-xs font-bold rounded-full"
        >
          Album
        </motion.div>

        <motion.button
          animate={{ 
            scale: isHovered ? 1 : 0,
            opacity: isHovered ? 1 : 0
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute bottom-3 right-3 w-12 h-12 bg-[#16FF6E] rounded-full flex items-center justify-center shadow-2xl"
        >
          <Play className="w-5 h-5 text-[#1B1B1B] ml-1" fill="currentColor" />
        </motion.button>

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      <div className="mt-3">
        <h3 className="font-semibold text-sm truncate">{album.titre}</h3>
        <p className="text-xs text-white/60 truncate">{album.artist}</p>
        <p className="text-xs text-white/40 mt-1">{album.annee}</p>
      </div>
    </motion.div>
  );
};
