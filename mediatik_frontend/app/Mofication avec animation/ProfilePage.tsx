// app/profile/page.tsx
"use client";
import { motion } from "framer-motion";
import { Heart, Music, List, Zap } from 'lucide-react';
import Link from 'next/link';
import { mockTracks } from "@/lib/utils";
import { TrackCard } from "@/components/ui/TrackCard";

export default function ProfilePage() {
  const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
  const favoriteTracks = mockTracks.filter(track => favorites.includes(track.id));

  return (
    <div className="flex-1 flex flex-col">
      {/* Header */}
      <motion.div 
        className="bg-white dark:bg-gray-800 shadow-sm p-4 flex items-center justify-between"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <Link href="/" className="p-2">
          <svg className="w-5 h-5 text-gray-800 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
        <h1 className="font-semibold text-base">Profil</h1>
        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
      </motion.div>

      {/* Stats */}
      <div className="p-4 grid grid-cols-2 gap-4">
        <motion.div 
          className="bg-white dark:bg-gray-800 p-4 rounded-xl text-center"
          whileHover={{ scale: 1.03 }}
        >
          <Heart className="w-6 h-6 text-pink-500 dark:text-pink-400 mx-auto mb-2" />
          <p className="text-sm text-gray-600 dark:text-gray-300">Favoris</p>
          <p className="font-bold">{favoriteTracks.length}</p>
        </motion.div>
        <motion.div 
          className="bg-white dark:bg-gray-800 p-4 rounded-xl text-center"
          whileHover={{ scale: 1.03 }}
        >
          <Music className="w-6 h-6 text-purple-500 dark:text-purple-400 mx-auto mb-2" />
          <p className="text-sm text-gray-600 dark:text-gray-300">Titres</p>
          <p className="font-bold">{mockTracks.length}</p>
        </motion.div>
      </div>

      {/* Favoris */}
      <div className="flex-1 overflow-y-auto p-4">
        <h2 className="text-pink-500 dark:text-pink-400 font-bold text-lg mb-4 flex items-center gap-2">
          <Heart className="w-5 h-5" fill="currentColor" />
          Favoris
        </h2>
        {favoriteTracks.length > 0 ? (
          <div className="space-y-2">
            {favoriteTracks.map((track, index) => (
              <TrackCard key={track.id} track={track} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500 dark:text-gray-400 text-center py-8">
            Aucun favori pour le moment
          </p>
        )}
      </div>
    </div>
  );
}