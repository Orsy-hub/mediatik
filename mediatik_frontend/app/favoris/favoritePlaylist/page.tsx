import { motion } from 'framer-motion'
import { Heart, Play } from 'lucide-react'
import React from 'react'

interface FavoritePlaylistProps {
    favoritePlaylist: {
        id: number,
        titre: string,
        createur: string,
        tracks: number,
        image: string,
        liked: boolean
    },
    index: number,
    onUnliked: (iid: number) => void
}

export const FavoritePlaylist = ({ favoritePlaylist, index, onUnliked}: FavoritePlaylistProps) => {
    const [isSurvoler, setIsSurvoler] = React.useState(false)
    return (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.05 }}
          whileHover={{ y: -5 }}
          onHoverStart={() => setIsSurvoler(true)}
          onHoverEnd={() => setIsSurvoler(false)}
          className="cursor-pointer"
        >
          <div className="relative aspect-square rounded-xl overflow-hidden">
            <img src={favoritePlaylist.image} alt={favoritePlaylist.titre} className="w-full h-full object-cover" />
            
            <motion.button
              animate={{ scale: isSurvoler ? 1 : 0, opacity: isSurvoler ? 1 : 0 }}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <Play className="w-7 h-7 text-[#1B1B1B] ml-1" fill="currentColor" />
              </div>
            </motion.button>
    
            {/* Unlike */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={(e) => {
                e.stopPropagation();
                onUnliked(favoritePlaylist.id);
              }}
              className="absolute top-3 right-3 w-10 h-10 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center"
            >
              <Heart className="w-5 h-5 fill-[#FF4BC3] text-[#FF4BC3]" />
            </motion.button>
          </div>
          
          <div className="mt-3">
            <h3 className="font-semibold text-sm truncate">{favoritePlaylist.titre}</h3>
            <p className="text-xs text-white/60 truncate">Par {favoritePlaylist.createur}</p>
            <p className="text-xs text-white/40 mt-1">{favoritePlaylist.tracks} titres</p>
          </div>
        </motion.div>
      );
}