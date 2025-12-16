// app/now-playing/page.tsx
"use client";
import { useState, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Heart, Shuffle, Repeat, Volume2, MoreHorizontal } from 'lucide-react';
import Link from 'next/link';

export default function NowPlayingPage() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(115);
  const [duration] = useState(252);
  const [volume, setVolume] = useState(0.7);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime(prev => {
          if (prev >= duration) return duration;
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, duration]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const togglePlay = () => setIsPlaying(!isPlaying);
  const skipBack = () => setCurrentTime(Math.max(0, currentTime - 15));
  const skipForward = () => setCurrentTime(Math.min(duration, currentTime + 15));

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white text-gray-800 flex flex-col">
      {/* Header */}
      <div className="bg-white shadow-sm p-4 flex items-center justify-between">
        <Link href="/" className="p-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
        <h1 className="font-semibold text-base">Lecture en cours</h1>
        <div className="flex items-center gap-2 relative">
          <button onClick={() => setShowVolumeSlider(!showVolumeSlider)}>
            <Volume2 className="w-5 h-5 text-gray-500" />
          </button>
          {showVolumeSlider && (
            <div className="absolute right-0 top-8 bg-white p-3 rounded-lg shadow-lg w-32 z-10">
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={(e) => setVolume(parseFloat(e.target.value))}
                className="w-full accent-pink-500"
              />
            </div>
          )}
          <button>
            <MoreHorizontal className="w-5 h-5 text-gray-500" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        {/* Pochette circulaire */}
        <div className="relative w-64 h-64 mb-8">
          <div className="w-full h-full rounded-full overflow-hidden shadow-lg">
            <img 
              src="https://placehold.co/256x256/66bb6a/white?text=Ariana+Grande" 
              alt="Positions" 
              className="w-full h-full object-cover"
            />
          </div>
          {/* Forme d'onde stylisée */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-48 h-12 flex items-center justify-center space-x-1 opacity-70">
              {[...Array(20)].map((_, i) => (
                <div 
                  key={i} 
                  className={`w-1 ${i % 2 === 0 ? 'bg-pink-500' : 'bg-gray-300'} h-8 rounded-full`}
                  style={{ height: `${Math.sin(i * 0.5) * 10 + 10}px` }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold">Positions</h1>
          <p className="text-gray-500">Ariana Grande</p>
        </div>

        <div className="w-full max-w-md mb-6">
          <div className="flex justify-between text-xs text-gray-500 mb-1">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1">
            <div 
              className="bg-pink-500 h-1 rounded-full"
              style={{ width: `${(currentTime / duration) * 100}%` }}
            />
          </div>
        </div>

        <div className="flex items-center justify-center gap-6 mb-6">
          <button className="p-2 text-gray-500 hover:text-pink-500">
            <Shuffle className="w-6 h-6" />
          </button>
          <button onClick={skipBack} className="p-2 text-gray-500 hover:text-pink-500">
            <SkipBack className="w-6 h-6" />
          </button>
          <button 
            onClick={togglePlay}
            className="w-16 h-16 bg-pink-500 text-white rounded-full flex items-center justify-center hover:scale-105 transition-transform"
          >
            {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
          </button>
          <button onClick={skipForward} className="p-2 text-gray-500 hover:text-pink-500">
            <SkipForward className="w-6 h-6" />
          </button>
          <button className="p-2 text-gray-500 hover:text-pink-500">
            <Repeat className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center gap-8">
          <button className="p-2 text-gray-500 hover:text-pink-500">
            <Heart className="w-6 h-6" />
          </button>
          <button className="p-2 text-gray-500 hover:text-pink-500">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bg-white border-t border-gray-200 p-4">
        <div className="flex justify-around">
          <div className="flex items-center gap-2">
            <img src="https://placehold.co/30x30/66bb6a/white?text=Pos" alt="Positions" className="w-8 h-8 rounded-full" />
            <div>
              <p className="text-xs font-medium">Positions</p>
              <p className="text-xs text-gray-500">Ariana Grande</p>
            </div>
          </div>
          <div className="flex gap-4">
            <button className="text-gray-400 hover:text-pink-500">
              <Heart className="w-5 h-5" />
            </button>
            <button className="text-gray-400 hover:text-pink-500">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 12H7m1 0v6m0 0v6m0-6h6m-6 6h6" />
              </svg>
            </button>
            <button className="text-pink-500">
              <Pause className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}