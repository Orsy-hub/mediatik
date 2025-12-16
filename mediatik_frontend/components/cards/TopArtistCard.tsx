"use client"
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useState } from "react";


interface TopArtistCardProps {
    artist: {
        id: number;
        name: string;
        image: string;
        streams: string;
        genre: string;
        rank: number;
    },
    index: number
}

export const TopArtistCard = ({artist, index}: TopArtistCardProps) => {

    const [esSurvoler, setEsSurvoler] = useState(false)

    const rankColor =
        artist.rank === 1
        ? "bg-[#FFD700] text-black"
        : artist.rank === 2
        ? "bg-[#C0C0C0] text-black"
        : artist.rank === 3
        ? "bg-[#CD7F32] text-black"
        : "bg-white/20 backdrop-blur-sm text-white";

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            onHoverStart={() => setEsSurvoler(true)}
            onHoverEnd={() => setEsSurvoler(false)}
            className="relative cursor-pointer"
        >
            <div className="relative aspect-square rounded-2xl overflow-hidden">
                <img src={artist.image} alt={artist.name}/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* Rank */}
                <div className={`absolute top-4 left-4 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold ${rankColor}`}>{ artist.rank }</div>

                {/* Play Bouton */}
                <motion.button
                    animate={{
                        scale: esSurvoler ? 1 : 0,
                        opacity: esSurvoler ? 1 : 0,
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute bottom-4 right-4 w-14 h-14 bg-[#16FF6E] rounded-full flex items-center justify-center shadow-2xl"
                >
                    <Play className="w-6 h-6 text-[#1B1B1B] ml-1" fill="currentColor" />
                </motion.button>

                {/* Infos */}
                <div className="absolute bottom-4 left-4 right-20">
                    <h3 className="font-bold text-lg truncate">{artist.name}</h3>
                    <p className="text-sm text-white/80">
                        {artist.streams} streams
                    </p>
                    <span className="inline-block mt-2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs">
                        {artist.genre}
                    </span>
                </div>
            </div>
        </motion.div>
    )
}
