import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// lib/utils.ts
export type Track = {
  id: string;
  title: string;
  artist: string;
  duration: string;
  image: string;
  album?: string;
};

export type Playlist = {
  id: string;
  name: string;
  tracks: string[]; // track IDs
};

// Mock data
export const mockTracks: Track[] = [
  { id: '1', title: 'Therefore I Am', artist: 'Billie Eilish', duration: '3:25', image: 'https://placehold.co/80x80/ff6b6b/white?text=EI' },
  { id: '2', title: 'Prisoner', artist: 'Miley Cyrus, Dua Lipa', duration: '2:52', image: 'https://placehold.co/80x80/4ecdc4/white?text=MC' },
  { id: '3', title: 'Blinding Lights', artist: 'The Weeknd', duration: '3:19', image: 'https://placehold.co/80x80/45b7d1/white?text=TW' },
  { id: '4', title: 'Dakiti', artist: 'Bad Bunny, Jhay Cortez', duration: '3:25', image: 'https://placehold.co/80x80/96ceb4/white?text=DB' },
  { id: '5', title: 'Positions', artist: 'Ariana Grande', duration: '2:52', image: 'https://placehold.co/80x80/fec8d8/white?text=AG' },
];

export const mockPlaylists: Playlist[] = [
  { id: 'p1', name: 'Made for you', tracks: ['1', '2', '5'] },
  { id: 'p2', name: 'Mood booster', tracks: ['3', '4'] },
  { id: 'p3', name: 'Pop chillout', tracks: ['1', '5'] },
];