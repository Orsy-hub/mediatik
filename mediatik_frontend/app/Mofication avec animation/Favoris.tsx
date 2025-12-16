import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { Aside } from '@/components/layout/Aside';
import { useSidebar } from '@/hooks/useAsidebar';
import Header from '@/components/layout/Header';
import { favoriteAlbums, favoriteArtists, favoritePlaylists, favoriteSongs } from '@/lib/data';
import { FavoriteAlbum } from '../favoris/favoriteAlbum/page';
import { FavoriteArtist } from '../favoris/favoriteArtist/page';
import { FavoritePlaylist } from '../favoris/favoritePlaylist/page';
import { FavoriteSong } from '../favoris/favoriteSong/page';



// ==================== PAGE PRINCIPALE ====================
const MediatikFavorites = () => {
  const {isOpen, close, toggle} = useSidebar();
  const [songs, setSongs] = useState(favoriteSongs);
  const [albums, setAlbums] = useState(favoriteAlbums);
  const [artists, setArtists] = useState(favoriteArtists);
  const [playlists, setPlaylists] = useState(favoritePlaylists);
  const [activeTab, setActiveTab] = useState('songs');

  const tabs = [
    { id: 'songs', label: 'Titres', count: songs.length },
    { id: 'albums', label: 'Albums', count: albums.length },
    { id: 'artists', label: 'Artistes', count: artists.length },
    { id: 'playlists', label: 'Playlists', count: playlists.length }
  ];

  const handleUnlikeSong = (id: number) => setSongs(songs.filter(s => s.id !== id));
  const handleUnlikeAlbum = (id: number) => setAlbums(albums.filter(a => a.id !== id));
  const handleUnlikeArtist = (id: number) => setArtists(artists.filter(a => a.id !== id));
  const handleUnlikePlaylist = (id: number) => setPlaylists(playlists.filter(p => p.id !== id));

  return (
    <div className="flex h-screen bg-[#1B1B1B] text-white overflow-hidden">
      <Aside isOpen={isOpen} close={close} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header menuCliquer={toggle} />

        <div className="flex-1 overflow-y-auto px-4 lg:px-8 py-6">
          {/* Tabs */}
          <div className="flex gap-2 mb-8 overflow-x-auto pb-2 scrollbar-hide">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.05 }}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-[#FF4BC3] to-[#C05CFF] text-white'
                    : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
                }`}
              >
                {tab.label}
                <span className={`px-2 py-0.5 rounded-full text-xs ${
                  activeTab === tab.id ? 'bg-white/20' : 'bg-white/10'
                }`}>
                  {tab.count}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Content */}
          {activeTab === 'songs' && (
            <div className="space-y-2">
              {songs.map((song, index) => (
                <FavoriteSong key={song.id} favoriteSong={song} index={index} onUnliked={handleUnlikeSong} />
              ))}
            </div>
          )}

          {activeTab === 'albums' && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {albums.map((album, index) => (
                <FavoriteAlbum key={album.id} album={album} index={index} onUnlike={handleUnlikeAlbum} />
              ))}
            </div>
          )}

          {activeTab === 'artists' && (
            <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
              {artists.map((artist, index) => (
                <FavoriteArtist key={artist.id} artist={artist} index={index} onUnlike={handleUnlikeArtist} />
              ))}
            </div>
          )}

          {activeTab === 'playlists' && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {playlists.map((playlist, index) => (
                <FavoritePlaylist key={playlist.id} playlist={playlist} index={index} onUnlike={handleUnlikePlaylist} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MediatikFavorites;