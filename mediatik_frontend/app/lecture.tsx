"use client";
import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Heart, MoreHorizontal, Volume2, VolumeX, Shuffle, Repeat } from 'lucide-react';

const Player = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration] = useState(240);
    const [progress, setProgress] = useState(0);
    const [volume, setVolume] = useState(0.7);
    const [showVolumeSlider, setShowVolumeSlider] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);
    const [shuffle, setShuffle] = useState(false);
    const [repeat, setRepeat] = useState(false);
    const [albumArt, setAlbumArt] = useState('https://placehold.co/400x400/8b5cf6/white?text=Album');
    const fileInputRef = useRef(null);

    // Simuler la lecture
    useEffect(() => {
        let interval;
        if (isPlaying) {
        interval = setInterval(() => {
            setCurrentTime(prev => {
            if (prev >= duration) {
                return repeat ? 0 : duration;
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
        reader.onload = (e) => setAlbumArt(e.target.result);
        reader.readAsDataURL(file);
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col">
            {/* Top bar: Lecture en cours */}
            <div className="bg-gray-800 py-4 px-4 flex items-center justify-between relative">
                <button className="p-1">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>

                <h2 className="text-white font-semibold text-base">LECTURE EN COURS</h2>

                <div className="flex items-center gap-3 relative">
                    {/* Bouton volume */}
                    <button onClick={() => setShowVolumeSlider(!showVolumeSlider)}>
                        {volume === 0 ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                    </button>

                    {/* SLIDER volume en absolute */}
                    {showVolumeSlider && (
                        <div className="absolute right-0 top-8 bg-gray-800 p-3 rounded-lg shadow-lg w-32 z-50">
                            <input
                                type="range"
                                min="0"
                                max="1"
                                step="0.01"
                                value={volume}
                                onChange={(e) => setVolume(parseFloat(e.target.value))}
                                className="w-full accent-white"
                            />
                        </div>
                    )}

                    <button className="p-1">
                        <MoreHorizontal className="w-5 h-5" />
                    </button>
                </div>
            </div>


            {/* Contenu principal */}
            <div className="flex flex-col  overflow-y-auto">
                {/* Main content Card */}
                <div className='flex-1 flex items-center justify-center'>
                    <div className='w-full max-w-md h-full bg-white rounded-xl p-4 shadow-2xl'>
                        {/* Pochette d'album */}
                        <div 
                            className="w-full aspect-square max-w-md mx-auto rounded-2xl overflow-hidden shadow-lg mb-6 cursor-pointer"
                            onClick={handleAlbumArtClick}
                            >
                            <img 
                                src={albumArt} 
                                alt="Album" 
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Titre */}
                        <div className="text-center mb-6 max-w-md mx-auto">
                            <h1 className="text-xl font-bold">Midnight Dreams</h1>
                            <p className="text-gray-400">Luna Eclipse</p>
                        </div>

                        {/* Boutons ❤️ + 📋 */}
                        <div className="flex justify-center gap-8 mb-8">
                            <button 
                                onClick={() => setIsFavorite(!isFavorite)}
                                className={`${isFavorite ? 'text-red-500' : 'text-gray-400'} p-2`}
                            >
                                <Heart className="w-6 h-6" fill={isFavorite ? "currentColor" : "none"} />
                            </button>
                            <button className="text-gray-400 p-2">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                </svg>
                            </button>
                            <button className="text-gray-400 p-2">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                                </svg>
                            </button>
                        </div>

                        {/* Contrôles de lecture en bas (fixés en bas) */}
                        <div className="px-6 pb-0 mb-0 bg-gray-900">
                            <div className="flex items-center justify-center gap-6 mb-4">
                                
                                
                            </div>

                            {/* Boutons Shuffle - Play - Repeat */}
                            <div className="flex items-center justify-center gap-8">
                                <button onClick={() => setShuffle(!shuffle)} className={`${shuffle ? 'text-green-400' : 'text-gray-500'} p-2`}>
                                    <Shuffle className="w-6 h-6" />
                                </button>
                                <button onClick={skipBack} className="text-gray-400 hover:text-white p-2">
                                    <SkipBack className="w-6 h-6" />
                                </button>
                                {/* Cercle de progression autour du Play */}
                                <div className="relative">
                                    <svg className="w-20 h-20" viewBox="0 0 100 100">
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r="45"
                                        fill="none"
                                        stroke="#374151"
                                        strokeWidth="6"
                                    />
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r="45"
                                        fill="none"
                                        stroke="#fff"
                                        strokeWidth="6"
                                        strokeLinecap="round"
                                        strokeDasharray={`${2 * Math.PI * 45}`}
                                        strokeDashoffset={`${2 * Math.PI * 45 * (1 - progress / 100)}`}
                                        transform="rotate(-90 50 50)"
                                    />
                                    </svg>
                                    <button onClick={togglePlay} className="absolute inset-0 w-full h-full flex items-center justify-center" >
                                        {isPlaying ? (
                                            <Pause className="w-8 h-8 bg-black/60 text-white rounded-full p-1" />
                                        ) : (
                                            <Play className="w-8 h-8 bg-black/60 text-white rounded-full p-1 ml-0.5" />
                                        )}
                                    </button>
                                </div>
                                <button onClick={skipForward} className="text-gray-400 hover:text-white p-2">
                                    <SkipForward className="w-6 h-6" />
                                </button>
                                <button onClick={() => setRepeat(!repeat)} className={`${repeat ? 'text-green-400' : 'text-gray-500'} p-2`}>
                                    <Repeat className="w-6 h-6" />
                                </button>
                            </div>
                        </div>

                        {/* Barre de progression */}
                        <div className="mb-4 max-w-md mx-auto w-full">
                            <div className="flex justify-between text-sm text-gray-400 mb-1">
                                <span>{formatTime(currentTime)}</span>
                                <span>{formatTime(duration)}</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-1.5">
                                <div className="bg-white h-1.5 rounded-full" style={{ width: `${progress}%` }}/> </div>
                            </div>
                        </div>

                        

                        {/* Hidden file input */}
                        <input
                            ref={fileInputRef}
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="hidden"
                        />
                </div>
            </div>
        </div>
        
    );
};

export default Player;
