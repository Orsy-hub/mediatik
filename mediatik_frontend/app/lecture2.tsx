"use client";
import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Heart, MoreHorizontal, Volume2, VolumeX, Shuffle, Repeat } from 'lucide-react';

const App = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration] = useState(240); // 4 minutes in seconds
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const [repeat, setRepeat] = useState(false);
  const [albumArt, setAlbumArt] = useState('https://placehold.co/300x300/8b5cf6/white?text=Album+Art');
  const fileInputRef = useRef(null);

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime(prev => {
          if (prev >= duration) {
            if (repeat) {
              return 0;
            }
            setIsPlaying(false);
            return duration;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, duration, repeat]);

  useEffect(() => {
    setProgress((currentTime / duration) * 100);
  }, [currentTime, duration]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const togglePlay = () => setIsPlaying(!isPlaying);
  const skipBack = () => setCurrentTime(Math.max(0, currentTime - 15));
  const skipForward = () => setCurrentTime(Math.min(duration, currentTime + 15));

  const handleAlbumArtClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setAlbumArt(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleVolumeSlider = () => {
    setShowVolumeSlider(!showVolumeSlider);
  };

  const handleVolumeChange = (e) => {
    setVolume(parseFloat(e.target.value));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Top Navigation Bar */}
      <div className="bg-gray-800 py-3 px-4 flex justify-between items-center">
        <button className="p-2 hover:bg-gray-700 rounded-full transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <span className="text-sm font-medium">LECTURE EN COURS</span>
        <button className="p-2 hover:bg-gray-700 rounded-full transition-colors">
          <MoreHorizontal className="w-6 h-6" />
        </button>
      </div>

      {/* Main Content Card */}
      <div className="flex-1 flex items-center justify-center ">
        <div className="w-full max-w-md bg-white rounded-xl p-8 shadow-2xl">
          {/* Album Art and Progress Circle */}
          <div className="relative ">
            <div 
              className="w-64 h-64 mx-auto rounded-2xl overflow-hidden shadow-xl cursor-pointer hover:opacity-90 transition-opacity"
              onClick={handleAlbumArtClick}
            >
              <img 
                src={albumArt} 
                alt="Album art" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Hidden file input */}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
            
            {/* Progress Circle with Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-48 h-48">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="4"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 45}`}
                    strokeDashoffset={`${2 * Math.PI * 45 * (1 - progress / 100)}`}
                    transform="rotate(-90 50 50)"
                  />
                </svg>
                <button 
                  onClick={togglePlay}
                  className="absolute inset-0 flex items-center justify-center w-full h-full"
                >
                  {isPlaying ? (
                    <Pause className="w-8 h-8 bg-black/70 text-white p-2 rounded-full" />
                  ) : (
                    <Play className="w-8 h-8 bg-black/70 text-white p-2 rounded-full ml-1" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Song Info */}
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-1">Midnight Dreams</h1>
            <p className="text-gray-600">Luna Eclipse</p>
          </div>

          {/* Top Icons (Heart, Plus, Playlist) */}
          <div className="flex justify-center gap-6 mb-6">
            <button 
              onClick={() => setIsFavorite(!isFavorite)}
              className={`p-2 rounded-full transition-colors ${isFavorite ? 'text-red-500' : 'text-gray-400 hover:text-gray-600'}`}
            >
              <Heart className="w-6 h-6" fill={isFavorite ? 'currentColor' : 'none'} />
            </button>
            <button className="p-2 rounded-full text-gray-400 hover:text-gray-600 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>
            <button className="p-2 rounded-full text-gray-400 hover:text-gray-600 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Volume Control */}
          <div className="relative mb-6">
            <button 
              onClick={toggleVolumeSlider}
              className="flex items-center gap-3 w-full p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {volume === 0 ? (
                <VolumeX className="w-5 h-5 text-gray-600" />
              ) : (
                <Volume2 className="w-5 h-5 text-gray-600" />
              )}
              <span className="text-gray-600 text-sm">Volume</span>
            </button>
            
            {showVolumeSlider && (
              <div className="mt-2 bg-gray-100 p-3 rounded-lg">
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            )}
          </div>

          {/* Shuffle and Repeat Controls */}
          <div className="flex justify-center gap-8 mb-6">
            <button 
              onClick={() => setShuffle(!shuffle)}
              className={`p-2 rounded-full transition-colors ${shuffle ? 'text-blue-500' : 'text-gray-400 hover:text-gray-600'}`}
            >
              <Shuffle className="w-6 h-6" />
            </button>
            <button 
              onClick={() => setRepeat(!repeat)}
              className={`p-2 rounded-full transition-colors ${repeat ? 'text-blue-500' : 'text-gray-400 hover:text-gray-600'}`}
            >
              <Repeat className="w-6 h-6" />
            </button>
          </div>

          {/* Progress Bar and Time */}
          <div className="mb-4">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-linear"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Playback Controls */}
          <div className="flex items-center justify-center gap-6">
            <button 
              onClick={skipBack}
              className="p-3 rounded-full hover:bg-gray-100 transition-colors"
            >
              <SkipBack className="w-6 h-6 text-gray-600" />
            </button>
            <button 
              onClick={togglePlay}
              className="bg-blue-500 text-white p-4 rounded-full hover:bg-blue-600 transition-colors shadow-lg"
            >
              {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
            </button>
            <button 
              onClick={skipForward}
              className="p-3 rounded-full hover:bg-gray-100 transition-colors"
            >
              <SkipForward className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

