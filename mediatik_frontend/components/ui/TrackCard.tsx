// components/ui/TrackCard.tsx
'use client';

import { Heart, Plus } from 'lucide-react';
import { Track } from '@/lib/utils';
import { useState, useEffect } from 'react';

export function TrackCard({ track, showIndex = false, index }: { 
  track: Track; 
  showIndex?: boolean;
  index?: number;
}) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setIsFavorite(favorites.includes(track.id));
  }, [track.id]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    if (isFavorite) {
      const updated = favorites.filter((id: string) => id !== track.id);
      localStorage.setItem('favorites', JSON.stringify(updated));
    } else {
      favorites.push(track.id);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
      {showIndex && (
        <span className="text-xs text-gray-400 dark:text-gray-500 w-6">{index}</span>
      )}
      <img src={track.image} alt={track.title} className="w-10 h-10 rounded-lg" />
      <div className="flex-1">
        <h3 className="font-medium text-sm">{track.title}</h3>
        <p className="text-xs text-gray-500 dark:text-gray-400">{track.artist}</p>
      </div>
      <span className="text-xs text-gray-400 dark:text-gray-500">{track.duration}</span>
      <div className="flex gap-2">
        <button 
          onClick={toggleFavorite}
          className={`${isFavorite ? 'text-pink-500 dark:text-pink-400' : 'text-gray-400 hover:text-pink-500 dark:hover:text-pink-400'}`}
        >
          <Heart className="w-4 h-4" fill={isFavorite ? 'currentColor' : 'none'} />
        </button>
        <button className="text-gray-400 hover:text-pink-500 dark:hover:text-pink-400">
          <Plus className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}