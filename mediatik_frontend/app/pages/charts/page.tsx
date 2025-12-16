"use client"
import { motion } from "framer-motion"
import { Section } from "@/components/Section"
import { globalTop50, newTalents, topAlbums, topArtists, viralTracks } from "@/lib/data"
import { ArrowDown, ArrowUp, Calendar, Heart, Minus, Play } from "lucide-react"
import { TopArtistCard } from "@/components/cards/TopArtistCard"
import { TrackCard } from "@/components/cards/TrackCard"
import { TalentCard } from "@/components/cards/TalentCard"

export const MediatikChart = () => {
// ==================== COMPOSANT: CHART ENTRY ====================
const ChartEntry = ({ song, index }) => {
    const getTrendIcon = () => {
        if (song.trend === 'up') return <ArrowUp className="w-4 h-4 text-[#16FF6E]" />;
        if (song.trend === 'down') return <ArrowDown className="w-4 h-4 text-red-400" />;
        return <Minus className="w-4 h-4 text-white/40" />;
    };

    const getRankChange = () => {
        const change = song.prevRank - song.rank;
        if (change > 0) return `+${change}`;
        if (change < 0) return change;
        return '-';
    };

    return (
        <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.05 }}
        whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.08)" }}
        className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/8 transition-all cursor-pointer group"
        >
        {/* Rank */}
        <div className="flex items-center gap-3 w-20">
            <span className={`text-2xl font-bold ${
            song.rank <= 3 ? 'bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent' : ''
            }`}>
            {song.rank}
            </span>
            <div className="flex flex-col items-center">
            {getTrendIcon()}
            <span className={`text-xs ${
                song.trend === 'up' ? 'text-[#16FF6E]' : 
                song.trend === 'down' ? 'text-red-400' : 
                'text-white/40'
            }`}>
                {getRankChange()}
            </span>
            </div>
        </div>

        {/* Cover */}
        <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 relative">
            <img src={song.image} alt={song.title} className="w-full h-full object-cover" />
            <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-black/60 flex items-center justify-center"
            >
            <Play className="w-6 h-6" fill="white" />
            </motion.div>
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
            <h3 className="font-semibold truncate">{song.title}</h3>
            <p className="text-sm text-white/60 truncate">{song.artist}</p>
        </div>

        {/* Stats */}
        <div className="hidden md:flex items-center gap-6 text-sm text-white/60">
            <div className="flex items-center gap-2">
            <Play className="w-4 h-4" />
            <span>{song.plays}</span>
            </div>
            <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{song.weeks}w</span>
            </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
            <motion.button whileHover={{ scale: 1.2 }} className="text-white/60 hover:text-[#FF4BC3]">
            <Heart className="w-5 h-5" />
            </motion.button>
            
            <motion.button
            whileHover={{ scale: 1.1 }}
            className="w-10 h-10 bg-[#16FF6E] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            >
            <Play className="w-5 h-5 text-[#1B1B1B] ml-0.5" fill="currentColor" />
            </motion.button>
        </div>
        </motion.div>
    );
};

    return (
    <div className="flex h-screen bg-[#1B1B1B] text-white overflow-hidden">

        {/* Scrolable  content */}
        <div className="flex-1 overflow-y-auto px-4 lg:px-8 py-6 space-y-8">
            {/* ================= TOP 50 ================= */}
            <Section
                titre="Top 50 Global"
                subtitre="Les morceaux les plus écoutés dans le monde"
                action="Voir tout"
            >
                <div className="flex justify-end mb-4">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="px-6 py-3 bg-gradient-to-r from-[#A00097] to-[#D000B3] rounded-full font-medium flex items-center gap-2"
                >
                    <Play className="w-5 h-5" />
                    Tout lire
                </motion.button>
                </div>

                <div className="space-y-2">
                {globalTop50.map((song, index) => (
                    <ChartEntry key={song.id} song={song} index={index} />
                ))}
                </div>
            </Section>

            {/* ================= TOP ARTISTS ================= */}
            <Section
                titre="Top Artistes"
                subtitre="Les artistes les plus streamés du moment"
                action="Classement"
            >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {topArtists.map((artist, index) => (
                    <TopArtistCard
                    key={artist.id}
                    artist={artist}
                    index={index}
                    />
                ))}
                </div>
            </Section>

            {/* ================= VIRAL TRACKS ================= */}
            <Section
                titre="Morceaux Viraux"
                subtitre="Tendances sur les réseaux sociaux"
                action="Explorer"
            >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {viralTracks.map((track, index) => (
                    <TrackCard key={track.id} track={track} index={index} />
                ))}
                </div>
            </Section>

            {/* ================= TOP ALBUMS ================= */}
            <Section
                titre="Top Albums"
                subtitre="Les albums qui cartonnent"
                action="Voir albums"
            >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {topAlbums.map((album, index) => (
                    <motion.div
                    key={album.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="cursor-pointer"
                    >
                    <div className="relative aspect-square rounded-xl overflow-hidden group">
                        <img
                        src={album.image}
                        alt={album.titre}
                        className="w-full h-full object-cover"
                        />

                        <div className="absolute top-3 left-3 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold bg-[#FFD700] text-black">
                        {album.rank}
                        </div>
                        <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 bg-black/50 flex items-center justify-center"
                        >
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                            <Play
                            className="w-7 h-7 text-[#1B1B1B] ml-1"
                            fill="currentColor"
                            />
                        </div>
                        </motion.div>
                    </div>

                    <div className="mt-3">
                        <h3 className="font-semibold text-sm truncate">
                        {album.titre}
                        </h3>
                        <p className="text-xs text-white/60 truncate">
                        {album.artist}
                        </p>
                        <p className="text-xs text-[#16FF6E] mt-1">
                        {album.streams} streams
                        </p>
                    </div>
                    </motion.div>
                ))}
                </div>
            </Section>
        </div>
    </div>
    )
}