import { motion } from 'framer-motion'
import  { Play, Heart, Calendar, MoreVertical } from 'lucide-react'

interface FavoriteAlbumProps {
    favoriteAlbum: {
        id: number,
        titre: string,
        artist: string,
        album: string,
        duration: number,
        addAt: string,
        year: number,
        image: string,
        track: number,
        liked: boolean
    },
    index: number,
    onUnliked: ( id:number ) => void
}

export const FavoriteAlbum = ({favoriteAlbum, index, onUnliked}: FavoriteAlbumProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.08)" }}
            className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/8 transition-all group"
        >
        {/* Cover */}
        <div className="relative w-14 h-14 rounded-lg overflow-hidden flex-shrink-0">
            <img src={favoriteAlbum.image} alt={favoriteAlbum.titre} className="w-full h-full object-cover" />
            <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-black/60 flex items-center justify-center cursor-pointer"
            >
            <Play className="w-6 h-6" fill="white" />
            </motion.div>
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-sm truncate">{favoriteAlbum.titre}</h3>
            <p className="text-xs text-white/60 truncate">{favoriteAlbum.artist}</p>
        </div>

        {/* Album (hidden on mobile) */}
        <div className="hidden md:block text-sm text-white/60 min-w-[150px] truncate">
            {favoriteAlbum.album}
        </div>

        {/* Date */}
        <div className="hidden lg:flex items-center gap-2 text-sm text-white/60 min-w-[120px]">
            <Calendar className="w-4 h-4" />
            <span>{new Date(favoriteAlbum.addAt).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
        </div>

        {/* Duration */}
        <div className="text-sm text-white/60 w-12 text-right">
            {favoriteAlbum.duration}
        </div>

        {/* Unlike Button */}
        <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => onUnliked(favoriteAlbum.id)}
            className="text-[#FF4BC3] hover:text-red-400 transition-colors"
        >
            <Heart className="w-5 h-5" fill="currentColor" />
        </motion.button>

        {/* More */}
        <button className="opacity-0 group-hover:opacity-100 transition-opacity">
            <MoreVertical className="w-5 h-5 text-white/60" />
        </button>
    </motion.div>
    )
}

