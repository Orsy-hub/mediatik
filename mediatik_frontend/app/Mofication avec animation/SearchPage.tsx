// app/search/page.tsx
"use client";
import { useState } from 'react';
import { Search, Heart, Plus, X, Music, User, Mic } from 'lucide-react';
import Link from 'next/link';

export default function SearchPages() {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 1, name: "Made for you", image: "https://placehold.co/80x80/ffc6c6/white?text=MFY" },
    { id: 2, name: "Mood booster", image: "https://placehold.co/80x80/ffe0b2/white?text=MB" },
    { id: 3, name: "Pop chillout", image: "https://placehold.co/80x80/e1bee7/white?text=PC" },
    { id: 4, name: "Rock classics", image: "https://placehold.co/80x80/b39ddb/white?text=RC" },
    { id: 5, name: "Jazz vibes", image: "https://placehold.co/80x80/80cbc4/white?text=JV" },
    { id: 6, name: "Hip hop beats", image: "https://placehold.co/80x80/ffab91/white?text=HH" },
  ];

  const recentSearches = [
    { id: 1, term: "Ariana Grande", icon: <User className="w-4 h-4" /> },
    { id: 2, term: "Billie Eilish", icon: <User className="w-4 h-4" /> },
    { id: 3, term: "Blinding Lights", icon: <Music className="w-4 h-4" /> },
    { id: 4, term: "Podcasts", icon: <Mic className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white text-gray-800 flex flex-col dark:from-gray-900 dark:to-black dark:text-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm p-4 flex items-center gap-3 dark:bg-gray-800">
        <Link href="/" className="p-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="What are you looking for?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-2 pl-10 pr-8 bg-gray-100 rounded-full text-sm focus:outline-none dark:bg-gray-700 dark:text-white"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500" />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-4">
        <section className="mb-6">
          <h2 className="text-pink-500 font-bold text-lg mb-4 dark:text-pink-400">Explorer</h2>
          <div className="grid grid-cols-2 gap-3">
            {categories.map(category => (
              <div key={category.id} className="bg-white rounded-xl p-3 shadow-sm flex items-center gap-3 dark:bg-gray-800">
                <img src={category.image} alt={category.name} className="w-12 h-12 rounded-lg" />
                <span className="font-medium text-sm">{category.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-pink-500 font-bold text-lg mb-4 dark:text-pink-400">Écoutés récemment</h2>
          <div className="space-y-2">
            {recentSearches.map(search => (
              <div key={search.id} className="flex items-center justify-between p-3 bg-white rounded-xl shadow-sm dark:bg-gray-800">
                <div className="flex items-center gap-3">
                  <span className="text-gray-400 dark:text-gray-500">{search.icon}</span>
                  <span className="text-sm">{search.term}</span>
                </div>
                <button className="text-gray-400 hover:text-pink-500 dark:text-gray-500 dark:hover:text-pink-400">
                  <Heart className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Bottom Navigation */}
      <div className="bg-white border-t border-gray-200 p-4 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-around">
          <Link href="/">
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v6m3-3h6" />
              </svg>
            </div>
          </Link>
          <Search className="w-6 h-6 text-pink-500 dark:text-pink-400" />
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 12H7m1 0v6m0 0v6m0-6h6m-6 6h6" />
            </svg>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0z M12 14a7 7 0 017 7h-14a7 7 0 017-7z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}