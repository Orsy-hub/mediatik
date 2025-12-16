"use client"
import { motion } from "framer-motion"
import { TrendingUp } from "lucide-react"
import React from "react"

interface TrackCardProps {
    track: {
        id: number;
        title: string;
        artist: string;
        image: string;
        platform: string;
        viralScore: number;
    }
    index: number
}


export const TrackCard = ({track, index}: TrackCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="relative cursor-pointer"
        >
            <div className="relative aspect-square rounded-xl overflow-hidden">
                <img
                src={track.image}
                alt={track.title}
                className="w-full h-full object-cover"
                />

                {/* Viral Badge */}
                <div className="absolute top-3 right-3 px-3 py-1 bg-[#16FF6E] text-[#1B1B1B] text-xs font-bold rounded-full flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    Viral
                </div>

                {/* Platform */}
                <div className="absolute top-3 left-3 px-3 py-1 bg-white/90 text-[#1B1B1B] text-xs font-bold rounded-full">
                    {track.platform}
                </div>

                {/* Score */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                <div className="mb-2">
                    <div className="flex justify-between text-xs text-white/80 mb-1">
                        <span>Score viral</span>
                        <span>{track.viralScore}%</span>
                    </div>

                    <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${track.viralScore}%` }}
                            transition={{
                            delay: index * 0.1 + 0.3,
                            duration: 0.8,
                            }}
                            className="h-full bg-[#16FF6E] rounded-full"
                        />
                    </div>
                </div>

                <h3 className="font-semibold text-sm truncate">
                    {track.title}
                </h3>
                <p className="text-xs text-white/70 truncate">
                    {track.artist}
                </p>
                </div>
            </div>
        </motion.div>
    );
};
