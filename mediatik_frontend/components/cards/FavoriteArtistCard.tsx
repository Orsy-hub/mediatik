"use client"

import { motion } from "framer-motion"
import { Play, Heart } from "lucide-react"

interface FavoriteArtistCardProps {
    artist: {
        id: number
        name: string
        image: string
        followers: string
    }
    index: number
    onUnlike: (id: number) => void
}

export const FavoriteArtistCard = ({ artist, index, onUnlike }: FavoriteArtistCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="text-center relative cursor-pointer"
        >
            <div className="relative w-32 h-32 mx-auto">
                <div className="w-full h-full rounded-full overflow-hidden ring-4 ring-[#FF4BC3]/30">
                    <img src={artist.image} alt={artist.name} className="w-full h-full object-cover" />
                </div>

                {/* Unlike */}
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => {
                        e.stopPropagation()
                        onUnlike(artist.id)
                    }}
                    className="absolute top-0 right-0 w-8 h-8 bg-[#FF4BC3] rounded-full flex items-center justify-center border-2 border-[#1B1B1B]"
                >
                    <Heart className="w-4 h-4 fill-white text-white" />
                </motion.button>

                {/* Play */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-10 h-10 bg-[#16FF6E] rounded-full flex items-center justify-center border-4 border-[#1B1B1B]">
                    <Play className="w-5 h-5 text-[#1B1B1B] ml-0.5" fill="currentColor" />
                </div>
            </div>

            <h3 className="font-semibold text-sm mt-4 truncate">{artist.name}</h3>
            <p className="text-xs text-white/50 mt-1">{artist.followers} abonnés</p>
        </motion.div>
    )
}
