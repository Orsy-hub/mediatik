// app/library/page.tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { List, Heart, Music, User, Plus } from 'lucide-react';

export default function LibraryPage() {
  const playlists = [
    { id: 'p1', name: 'Made for you', trackCount: 12, image: 'https://placehold.co/80x80/ffc6c6/white?text=MFY' },
    { id: 'p2', name: 'Mood booster', trackCount: 8, image: 'https://placehold.co/80x80/ffe0b2/white?text=MB' },
    { id: 'p3', name: 'Pop chillout', trackCount: 15, image: 'https://placehold.co/80x80/e1bee7/white?text=PC' },
  ];

  const albums = [
    { id: 'a1', name: 'Positions', artist: 'Ariana Grande', image: 'https://placehold.co/80x80/fec8d8/white?text=AG' },
    { id: 'a2', name: 'Happier Than Ever', artist: 'Billie Eilish', image: 'https://placehold.co/80x80/ff6b6b/white?text=BE' },
  ];

  const artists = [
    { id: 'ar1', name: 'The Weeknd', image: 'https://placehold.co/80x80/45b7d1/white?text=TW' },
    { id: 'ar2', name: 'Dua Lipa', image: 'https://placehold.co/80x80/b39ddb/white?text=DL' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white text-gray-800 flex flex-col dark:from-gray-900 dark:to-black dark:text-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm p-4 flex items-center justify-between dark:bg-gray-800">
        <Link href="/" className="p-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
        <h1 className="font-semibold text-base">Bibliothèque</h1>
        <button className="p-1">
          <Plus className="w-5 h-5 text-gray-500 dark:text-gray-400" />
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-4">
        {/* Playlists */}
        <section className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <List className="w-5 h-5 text-pink-500 dark:text-pink-400" />
            <h2 className="text-pink-500 font-bold text-lg dark:text-pink-400">Playlists</h2>
          </div>
          <div className="space-y-3">
            {playlists.map(playlist => (
              <Link key={playlist.id} href={`/playlist/${playlist.id}`} className="block">
                <div className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <img src={playlist.image} alt={playlist.name} className="w-14 h-14 rounded-lg" />
                  <div className="flex-1">
                    <h3 className="font-medium text-sm">{playlist.name}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{playlist.trackCount} titres</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Albums */}
        <section className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Music className="w-5 h-5 text-purple-500 dark:text-purple-400" />
            <h2 className="text-purple-500 font-bold text-lg dark:text-purple-400">Albums</h2>
          </div>
          <div className="space-y-3">
            {albums.map(album => (
              <Link key={album.id} href={`/album/${album.id}`} className="block">
                <div className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <img src={album.image} alt={album.name} className="w-14 h-14 rounded-lg" />
                  <div className="flex-1">
                    <h3 className="font-medium text-sm">{album.name}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{album.artist}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Artistes */}
        <section>
          <div className="flex items-center gap-2 mb-3">
            <User className="w-5 h-5 text-blue-500 dark:text-blue-400" />
            <h2 className="text-blue-500 font-bold text-lg dark:text-blue-400">Artistes</h2>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {artists.map(artist => (
              <Link key={artist.id} href={`/artist/${artist.id}`} className="block">
                <div className="bg-white rounded-xl p-3 shadow-sm text-center hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <img src={artist.image} alt={artist.name} className="w-16 h-16 rounded-full mx-auto mb-2" />
                  <p className="text-sm font-medium">{artist.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>

      {/* Bottom Navigation */}
      <div className="bg-white border-t border-gray-200 p-4 dark:bg-gray-800 dark:border-gray-700">
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
            <List className="w-6 h-6 text-pink-500 dark:text-pink-400" />
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