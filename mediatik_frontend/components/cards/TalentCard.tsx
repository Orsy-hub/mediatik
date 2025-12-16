"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import React, { useState } from "react";

interface TalentCardProps {
  talent: {
    id: number;
    name: string;
    image: string;
    genre: string;
  };
  index: number;
}

export const TalentCard = ({ talent, index }: TalentCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
      <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="cursor-pointer"
      >
          <div className="relative aspect-square rounded-xl overflow-hidden">
              <img src={talent.image} alt={talent.name} className="w-full h-full object-cover"/>
              
              <motion.div 
                  className="absolute top-2 right-2 px-2 py-1 bg-[#C05CFF] text-white text-xs font-bold rounded-full"
              >
                  {talent.genre}
              </motion.div>

              <motion.button
                  className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center"
                  animate={{ 
                      scale: isHovered ? 1 : 0,
                      opacity: isHovered ? 1 : 0
                  }}
              >
                  <div className="w-14 h-14 bg-[#16FF6E] rounded-full flex items-center justify-center">
                      <Play className="w-6 h-6 text-[#1B1B1B] ml-1" fill="currentColor" />
                  </div>
              </motion.button>

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          </div>
      
          <h3 className="font-semibold text-sm mt-2 truncate">{talent.name}</h3>
      </motion.div>
  );
};
