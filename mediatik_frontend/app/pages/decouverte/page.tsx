"use client"
import { AlbumCard } from "@/components/cards/AlbumCard";
import { ArtistCard } from "@/components/cards/ArtistCard";
import { SongCard } from "@/components/cards/SongCard";
import { TalentCard } from "@/components/cards/TalentCard";
import { Section } from "@/components/Section";
import { newTalents, topAlbums, topArtists, trendingSongs } from "@/lib/data";
import { useState } from "react";

export const MediatkDiscovery = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-[#1B1B1B] text-white overflow-hidden">

        {/* SCROLLABLE CONTENT */}
        <div className="flex-1 overflow-y-auto px-4 lg:px-8 py-6 space-y-8">
          {/* Section: Les titres qui cartonnent */}
          <Section titre="Les titres qui cartonnent">
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
              {trendingSongs.map((song, index) => (
                <SongCard key={song.id} song={song} index={index} />
              ))}
            </div>
          </Section>

          {/* Section: Les albums en tête */}
          <Section titre="Les albums en tête">
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
              {topAlbums.map((album, index) => (
                <AlbumCard key={album.id} album={album} index={index} />
              ))}
            </div>
          </Section>

          {/* Section: Artistes du moment */}
          <Section titre="Artistes du moment">
            <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
              {topArtists.map((artist, index) => (
                <ArtistCard key={artist.id} artist={artist} index={index} />
              ))}
            </div>
          </Section>

          {/* Section: Nouveaux talents - Grid Responsive */}
          <Section titre="Nouveaux talents">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {newTalents.map((talent, index) => (
                <TalentCard key={talent.id} talent={talent} index={index} />
              ))}
            </div>
          </Section>
        </div>
    </div>
  );
};
