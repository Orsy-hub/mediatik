"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

interface ArtistCardProps {
  artist: {
    id: number;
    name: string;
    image: string;
    followers: string;
  };
  index: number;
}

export const ArtistCard = ({ artist, index }: ArtistCardProps) => (
  <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="flex-shrink-0 text-center cursor-pointer"
  >
      <motion.div 
          whileHover={{ y: -5 }}
          className="relative w-28 h-28 mx-auto"
      >
          <div className="w-full h-full rounded-full overflow-hidden ring-4 ring-[#A00097]/30">
              <img 
              src={artist.image} 
              alt={artist.name}
              className="w-full h-full object-cover"
              />
          </div>
          <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-[#16FF6E] rounded-full flex items-center justify-center border-4 border-[#1B1B1B]">
              <Play className="w-4 h-4 text-[#1B1B1B] ml-0.5" fill="currentColor" />
          </div>
      </motion.div>

      <h3 className="font-semibold text-sm mt-3">{artist.name}</h3>
      <p className="text-xs text-white/50">{artist.followers} abonnés</p>
  </motion.div>
);
