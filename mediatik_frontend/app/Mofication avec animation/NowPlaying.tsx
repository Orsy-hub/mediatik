// app/now-playing/page.tsx
"use client";
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, SkipBack, SkipForward, Heart, Shuffle, Repeat, Volume2, MoreHorizontal } from 'lucide-react';
import Link from 'next/link';
import { mockTracks } from "@/lib/utils";

export default function NowPlayingPages() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(115);
  const [duration] = useState(252);
  const [volume, setVolume] = useState(0.7);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const [repeat, setRepeat] = useState(false);
  const audioRef = useRef<HTMLDivElement>(null);

  const currentTrack = mockTracks[4]; // Positions

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setIsFavorite(favorites.includes(currentTrack.id));
  }, [currentTrack.id]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime(prev => {
          if (prev >= duration) return repeat ? 0 : duration;
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, duration, repeat]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const togglePlay = () => setIsPlaying(!isPlaying);
  const skipBack = () => setCurrentTime(Math.max(0, currentTime - 15));
  const skipForward = () => setCurrentTime(Math.min(duration, currentTime + 15));
  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    if (isFavorite) {
      const updated = favorites.filter((id: string) => id !== currentTrack.id);
      localStorage.setItem('favorites', JSON.stringify(updated));
    } else {
      favorites.push(currentTrack.id);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
    setIsFavorite(!isFavorite);
  };

  const progress = (currentTime / duration) * 100;

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
        <h1 className="font-semibold text-base">Lecture en cours</h1>
        <div className="flex items-center gap-2 relative">
          <button onClick={() => setShowVolumeSlider(!showVolumeSlider)}>
            <Volume2 className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          </button>
          <AnimatePresence>
            {showVolumeSlider && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute right-0 top-8 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg w-32 z-10"
              >
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={(e) => setVolume(parseFloat(e.target.value))}
                  className="w-full accent-pink-500 dark:accent-pink-400"
                />
              </motion.div>
            )}
          </AnimatePresence>
          <button>
            <MoreHorizontal className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          </button>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        {/* Pochette animée */}
        <motion.div 
          className="relative w-64 h-64 mb-8"
          animate={{ 
            rotate: isPlaying ? [0, 2, 0, -2, 0] : 0 
          }}
          transition={{ 
            duration: 4, 
            repeat: isPlaying ? Infinity : 0, 
            ease: "easeInOut" 
          }}
        >
          <div className="w-full h-full rounded-full overflow-hidden shadow-xl">
            <img 
              src={currentTrack.image} 
              alt={currentTrack.title} 
              className="w-full h-full object-cover"
            />
          </div>
          {/* Forme d'onde animée */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-48 h-12 flex items-center justify-center space-x-1 opacity-70">
              {[...Array(20)].map((_, i) => (
                <motion.div 
                  key={i} 
                  className={`w-1 ${i % 2 === 0 ? 'bg-pink-500' : 'bg-gray-300 dark:bg-gray-600'} h-8 rounded-full`}
                  animate={{
                    height: isPlaying ? [
                      `${Math.sin(i * 0.5) * 10 + 10}px`,
                      `${Math.sin(i * 0.5 + 2) * 10 + 10}px`,
                      `${Math.sin(i * 0.5) * 10 + 10}px`
                    ] : `${Math.sin(i * 0.5) * 10 + 10}px`
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: isPlaying ? Infinity : 0,
                    ease: "easeInOut"
                  }}
                ></motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="text-center mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h1 className="text-2xl font-bold dark:text-white">{currentTrack.title}</h1>
          <p className="text-gray-500 dark:text-gray-400">{currentTrack.artist}</p>
        </motion.div>

        {/* Barre de progression */}
        <motion.div 
          className="w-full max-w-md mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
            <motion.div 
              className="bg-pink-500 dark:bg-pink-400 h-1.5 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 1, ease: "linear" }}
            />
          </div>
        </motion.div>

        {/* Contrôles */}
        <motion.div 
          className="flex items-center justify-center gap-6 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <button 
            onClick={() => setShuffle(!shuffle)}
            className={`${shuffle ? 'text-green-500 dark:text-green-400' : 'text-gray-500 dark:text-gray-400'} p-2`}
          >
            <Shuffle className="w-6 h-6" />
          </button>
          <button onClick={skipBack} className="text-gray-500 dark:text-gray-400 p-2">
            <SkipBack className="w-6 h-6" />
          </button>
          <motion.button 
            onClick={togglePlay}
            className="w-16 h-16 bg-pink-500 text-white rounded-full flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
          </motion.button>
          <button onClick={skipForward} className="text-gray-500 dark:text-gray-400 p-2">
            <SkipForward className="w-6 h-6" />
          </button>
          <button 
            onClick={() => setRepeat(!repeat)}
            className={`${repeat ? 'text-green-500 dark:text-green-400' : 'text-gray-500 dark:text-gray-400'} p-2`}
          >
            <Repeat className="w-6 h-6" />
          </button>
        </motion.div>

        <motion.div 
          className="flex justify-center gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <button onClick={toggleFavorite} className={`${isFavorite ? 'text-pink-500 dark:text-pink-400' : 'text-gray-500 dark:text-gray-400'} p-2`}>
            <Heart className="w-6 h-6" fill={isFavorite ? 'currentColor' : 'none'} />
          </button>
          <button className="text-gray-500 dark:text-gray-400 p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </motion.div>
      </div>
    </div>
  );
}