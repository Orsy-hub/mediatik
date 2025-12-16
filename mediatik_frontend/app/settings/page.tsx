// app/settings/page.tsx
"use client";
import { useState } from 'react';
import { Moon, Sun, Bell, Palette, Lock, Wifi, Battery, Language, HelpCircle } from 'lucide-react';
import Link from 'next/link';

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(false);
  
  return (
    <div className="min-h-screen bg-amber-600">
      {/* Header mobile */}
      <div className="md:hidden bg-white dark:bg-gray-800 shadow-sm p-4 flex items-center justify-between">
        <Link href="/" className="p-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
        <h1 className="font-semibold text-base">Paramètres</h1>
      </div>

      <div className="p-4 md:p-8 max-w-3xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6">
          <h2 className="text-xl font-bold mb-6">Paramètres</h2>
          {/* ... contenu identique à la version mobile, mais sans bottom nav */}
        </div>
      </div>
    </div>
  );
}
