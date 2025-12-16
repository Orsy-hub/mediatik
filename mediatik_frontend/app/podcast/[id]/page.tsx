// app/podcast/[id]/page.tsx
"use client";
import { useParams } from 'next/navigation';
import { Play, Heart, Plus } from 'lucide-react';
import Link from 'next/link';

export default function PodcastPage() {
  const { id } = useParams<{ id: string }>();

  const podcast = {
    id: 'pod1',
    name: 'Tech Today',
    author: 'Sarah Johnson',
    image: 'https://placehold.co/300x300/6b46c1/white?text=TT',
    description: 'Les dernières actualités tech expliquées simplement.',
    episodes: [
      { id: 'e1', title: 'L’IA dans notre quotidien', duration: '42:15', date: '12 nov. 2025' },
      { id: 'e2', title: 'Web3 : Révolution ou illusion ?', duration: '38:20', date: '5 nov. 2025' },
      { id: 'e3', title: 'La cybersécurité en 2025', duration: '45:10', date: '29 oct. 2025' },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white text-gray-800 flex flex-col dark:from-gray-900 dark:to-black dark:text-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm p-4 flex items-center justify-between dark:bg-gray-800">
        <Link href="/library" className="p-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
        <h1 className="font-semibold text-base">Podcast</h1>
        <div className="w-8 h-8"></div>
      </div>

      {/* Cover & Info */}
      <div className="p-4">
        <img src={podcast.image} alt={podcast.name} className="w-full aspect-square max-w-md mx-auto rounded-2xl shadow-lg" />
        <div className="text-center mt-4">
          <h1 className="text-2xl font-bold">{podcast.name}</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">{podcast.author}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{podcast.episodes.length} épisodes</p>
        </div>
      </div>

      {/* Description */}
      <div className="px-4 mb-4">
        <p className="text-gray-700 dark:text-gray-300 text-sm">{podcast.description}</p>
      </div>

      {/* Play Button */}
      <div className="px-4 mb-4">
        <button className="w-full bg-pink-500 text-white py-3 rounded-full font-medium flex items-center justify-center gap-2 dark:bg-pink-400">
          <Play className="w-5 h-5 ml-1" />
          Lire le dernier
        </button>
      </div>

      {/* Episodes */}
      <div className="flex-1 overflow-y-auto px-4 pb-20">
        <h2 className="font-bold text-lg mb-3">Épisodes</h2>
        <div className="space-y-3">
          {podcast.episodes.map(episode => (
            <div key={episode.id} className="bg-white rounded-xl p-4 shadow-sm dark:bg-gray-800">
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <Play className="w-5 h-5 text-gray-400 hover:text-pink-500 dark:hover:text-pink-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-sm">{episode.title}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{episode.date} • {episode.duration}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <button className="text-gray-400 hover:text-pink-500 dark:hover:text-pink-400">
                    <Heart className="w-4 h-4" />
                  </button>
                  <button className="text-gray-400 hover:text-pink-500 dark:hover:text-pink-400">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bg-white border-t border-gray-200 p-4 dark:bg-gray-800 dark:border-gray-700 fixed bottom-0 w-full">
        <div className="flex justify-around">
          <Link href="/">
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v6m3-3h6" />
            </svg>
          </Link>
          <Link href="/search">
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </Link>
          <Link href="/library">
            <svg className="w-6 h-6 text-pink-500 dark:text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 12H7m1 0v6m0 0v6m0-6h6m-6 6h6" />
            </svg>
          </Link>
          <Link href="/profile">
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0z M12 14a7 7 0 017 7h-14a7 7 0 017-7z" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}