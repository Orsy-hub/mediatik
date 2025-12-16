"use client"

import { motion } from "framer-motion"
import { Play, Heart } from "lucide-react"
import { useState } from "react"

interface FavoriteAlbumCardProps {
    album: {
        id: number
        title: string
        artist: string
        image: string
        year: number
        tracks: number
    }
    index: number
    onUnlike: (id: number) => void
}

export const FavoriteAlbumCard = ({ album, index, onUnlike }: FavoriteAlbumCardProps) => {

    const [hovered, setHovered] = useState(false)

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ y: -8 }}
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            className="relative cursor-pointer"
        >
            <div className="relative aspect-square rounded-2xl overflow-hidden">
                <img src={album.image} alt={album.title} className="w-full h-full object-cover" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* Play */}
                <motion.button
                    animate={{ scale: hovered ? 1 : 0, opacity: hovered ? 1 : 0 }}
                    whileHover={{ scale: 1.1 }}
                    className="absolute bottom-4 right-4 w-14 h-14 bg-[#16FF6E] rounded-full flex items-center justify-center shadow-xl"
                >
                    <Play className="w-6 h-6 text-[#1B1B1B] ml-1" fill="currentColor" />
                </motion.button>

                {/* Unlike */}
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => {
                        e.stopPropagation()
                        onUnlike(album.id)
                    }}
                    className="absolute top-4 right-4 w-10 h-10 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center"
                >
                    <Heart className="w-5 h-5 fill-[#FF4BC3] text-[#FF4BC3]" />
                </motion.button>

                {/* Infos */}
                <div className="absolute bottom-4 left-4 right-20">
                    <h3 className="font-bold text-lg truncate">{album.title}</h3>
                    <p className="text-sm text-white/70 truncate">{album.artist}</p>
                    <p className="text-xs text-white/50 mt-1">
                        {album.year} • {album.tracks} titres
                    </p>
                </div>
            </div>
        </motion.div>
    )
}
