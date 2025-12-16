// app/album/[id]/page.tsx
"use client";
import { useParams } from 'next/navigation';
import { Play, Heart, Plus } from 'lucide-react';
import Link from 'next/link';
import AnimateBackground from '@/lib/utils/AnimateBackground';

export default function AlbumDetailPage() {
  const { id } = useParams<{ id: string }>();

  const album = {
    id: 'a1',
    name: 'Positions',
    artist: 'Ariana Grande',
    year: '2020',
    image: 'https://placehold.co/300x300/fec8d8/white?text=AG',
    tracks: [
      { id: '5', title: 'Positions', duration: '2:52' },
      { id: '6', title: '34+35', duration: '2:53' },
      { id: '7', title: 'POV', duration: '3:10' },
      { id: '8', title: 'Just Like Magic', duration: '3:26' },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white text-gray-800 flex flex-col dark:from-gray-900 dark:to-black dark:text-gray-100">
        <AnimateBackground />
        {/* Header */}
        <div className="bg-white shadow-sm p-4 flex items-center justify-between dark:bg-gray-800">
            <Link href="/library" className="p-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            </Link>
            <h1 className="font-semibold text-base">Album</h1>
            <div className="w-8 h-8"></div>
        </div>

        {/* Cover & Info */}
        <div className="p-4">
            <img src={album.image} alt={album.name} className="w-full aspect-square max-w-md mx-auto rounded-2xl shadow-lg" />
            <div className="text-center mt-4">
                <h1 className="text-2xl font-bold">{album.name}</h1>
                <p className="text-gray-500 dark:text-gray-400 mt-1">{album.artist}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{album.year}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{album.tracks.length} titres</p>
            </div>
        </div>

        {/* Play Button */}
        <div className="px-4 mb-4">
            <button className="w-full bg-pink-500 text-white py-3 rounded-full font-medium flex items-center justify-center gap-2 dark:bg-pink-400">
            <Play className="w-5 h-5 ml-1" />
            Lire tout
            </button>
        </div>

        {/* Tracks */}
        <div className="flex-1 overflow-y-auto px-4 pb-20">
            <div className="space-y-2">
            {album.tracks.map((track, index) => (
                <div key={track.id} className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm dark:bg-gray-800">
                <span className="text-xs text-gray-400 w-6">{index + 1}</span>
                <div className="flex-1">
                    <h3 className="font-medium text-sm">{track.title}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{album.artist}</p>
                </div>
                <span className="text-xs text-gray-400 dark:text-gray-500">{track.duration}</span>
                <div className="flex gap-2">
                    <button className="text-gray-400 hover:text-pink-500 dark:hover:text-pink-400">
                    <Heart className="w-4 h-4" />
                    </button>
                    <button className="text-gray-400 hover:text-pink-500 dark:hover:text-pink-400">
                    <Plus className="w-4 h-4" />
                    </button>
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