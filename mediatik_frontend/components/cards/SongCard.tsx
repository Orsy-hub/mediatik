import { motion } from "framer-motion";
import { Play } from "lucide-react";
import React from "react";

interface SongCardProps {
    song: {
        id: number;
        title: string;
        artist: string;
        image: string;
        plays: string;
    };
    index: number;
}

export const SongCard = ({song, index}: SongCardProps) => {

    const [isSurvoler, setIsSurvoler] = React.useState(false);
    return (
        <motion.div
            initial= {{ opacity:0, x: -20 }}
            animate= {{ opacity:1, x:0}}
            transition={{ delay: index * 0.1}}
            onHoverStart={()=> setIsSurvoler(true)}
            onHoverEnd={()=> setIsSurvoler(false)}
            className="w-48 cursor-pointer"
        >
            <div className="relative aspect-square rounded-2xl overflow-hidden">
                {/* Effet Shimmer */}
                <div className="absolute inset-0 animate-shimmer" />
                <img src={song.image} alt={song.title} />

                {/* Badge */}
                <div className="absolute top-3 left-3 badge-success">
                    Moceau
                </div>

                {/* Bouton Play */}
                <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{scale: isSurvoler ? 1 : 0, scale: isSurvoler ? 1 : 0.8  }}
                    className="absolute bottom-3 right-3 w-12 h-12 bg-[#16FF6E] rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
                        <Play className="ml-1" fill="currentColor"/>
                </motion.button>
            </div>
            <div className="mt-3">
                <h3 className="font-semibold truncate">{ song.title }</h3>
                <p className="text-white/60">{ song.artist }</p>
            </div>
        </motion.div>
    );
}

