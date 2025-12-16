"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { trendingSongs, topAlbums, topArtists, newTalents } from '@/lib/data';
import { 
  Menu, Search, Bell, User, ChevronRight, Filter
} from 'lucide-react';
import { Aside } from '@/components/layout/Aside';
import { SongCard } from '@/components/cards/SongCard';
import { AlbumCard } from '@/components/cards/AlbumCard';
import { ArtistCard } from '@/components/cards/ArtistCard';
import { TalentCard } from '@/components/cards/TalentCard';
import { useSidebar } from '@/hooks/useAsidebar';
import Header from '@/components/layout/Header';



const MediatikApp = () => {
    const { isOpen, toggle, close } = useSidebar();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-[#1B1B1B] text-white overflow-hidden">
        {/* SIDEBAR - Desktop */}
        
        <Aside isOpen={isOpen} close={close} />
        {/* MAIN CONTENT */}
        <div className="flex-1 flex flex-col overflow-hidden">
            
            {/* HEADER avec dégradé */}
            
            <Header menuCliquer={toggle} />
            {/* SCROLLABLE CONTENT */}
            <div className="flex-1 overflow-y-auto px-4 lg:px-8 py-6 space-y-8">
                {/* Section: Les titres qui cartonnent */}
                <Section title="Les titres qui cartonnent">
                    <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                        {trendingSongs.map((song, index) => (
                            <SongCard key={song.id} song={song} index={index} />
                        ))}
                    </div>
                </Section>

                {/* Section: Les albums en tête */}
                <Section title="Les albums en tête">
                    <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                        {topAlbums.map((album, index) => (
                            <AlbumCard key={album.id} album={album} index={index} />
                        ))}
                    </div>
                </Section>

                {/* Section: Artistes du moment */}
                <Section title="Artistes du moment">
                    <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
                        {topArtists.map((artist, index) => (
                            <ArtistCard key={artist.id} artist={artist} index={index} />
                        ))}
                    </div>
                </Section>

                {/* Section: Nouveaux talents - Grid Responsive */}
                <Section title="Nouveaux talents">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                        {newTalents.map((talent, index) => (
                            <TalentCard key={talent.id} talent={talent} index={index} />
                        ))}
                    </div>
                </Section>
            </div>
        </div>
    </div>
  );
};

// Composant Section
const Section = ({ title, children }) => (
    <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
    >
        <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl lg:text-2xl font-bold">{title}</h2>
        <motion.button 
            whileHover={{ x: 5 }}
            className="text-sm text-white/60 hover:text-white flex items-center gap-1"
        >
            Voir tout
            <ChevronRight className="w-4 h-4" />
        </motion.button>
        </div>
        {children}
    </motion.section>
);





export default MediatikApp;