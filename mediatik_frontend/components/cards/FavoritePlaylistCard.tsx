"use client"

import { motion } from "framer-motion"
import { Play, Heart } from "lucide-react"
import { useState } from "react"

interface FavoritePlaylistProps {
    playlist: {
    id: number
    title: string
    image: string
    creator: string
    tracks: number
  }
  index: number
  onUnlike: (id: number) => void
}

export const FavoritePlaylist = ({
  playlist,
  index,
  onUnlike,
}: FavoritePlaylistProps) => {
  const [isHovered, setIsHovered] = useState(false)

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
        <img
          src={playlist.image}
          alt={playlist.title}
          className="w-full h-full object-cover"
        />

        {/* Hover Play */}
        <motion.div
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center"
        >
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
            <Play
              className="w-7 h-7 text-[#1B1B1B] ml-1"
              fill="currentColor"
            />
          </div>
        </motion.div>

        {/* Unlike */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.stopPropagation()
            onUnlike(playlist.id)
          }}
          className="absolute top-3 right-3 w-10 h-10 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center"
        >
          <Heart className="w-5 h-5 fill-[#FF4BC3] text-[#FF4BC3]" />
        </motion.button>
      </div>

      <div className="mt-3">
        <h3 className="font-semibold text-sm truncate">
          {playlist.title}
        </h3>
        <p className="text-xs text-white/60 truncate">
          Par {playlist.creator}
        </p>
        <p className="text-xs text-white/40 mt-1">
          {playlist.tracks} titres
        </p>
      </div>
    </motion.div>
  )
}
