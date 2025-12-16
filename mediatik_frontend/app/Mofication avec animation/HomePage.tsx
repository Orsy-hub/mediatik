"use client"
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, Search, Bell, Play, Heart, Home, Compass, Library, Plus, 
  TrendingUp, Music, User, Settings, ChevronRight, Filter, Clock,
  MoreVertical, Download, Share2, ListMusic, Grid3x3, List,
  Folder, Disc, Mic2, Calendar, SortAsc, Edit2, Trash2
} from 'lucide-react';

// ==================== DONNÉES BIBLIOTHÈQUE ====================
const myPlaylists = [
  { id: 1, title: "Road Trip", tracks: 45, duration: "3h 12min", image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400", lastUpdated: "Il y a 2 jours", isPrivate: false },
  { id: 2, title: "Workout Beast Mode", tracks: 32, duration: "2h 15min", image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400", lastUpdated: "Aujourd'hui", isPrivate: false },
  { id: 3, title: "Chill Nights", tracks: 28, duration: "1h 48min", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400", lastUpdated: "Il y a 5 jours", isPrivate: true },
  { id: 4, title: "Party Mix 2024", tracks: 67, duration: "4h 25min", image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400", lastUpdated: "Hier", isPrivate: false },
  { id: 5, title: "Focus & Study", tracks: 41, duration: "2h 55min", image: "https://images.unsplash.com/photo-1487537708572-3c850b5e856a?w=400", lastUpdated: "Il y a 3 jours", isPrivate: false },
  { id: 6, title: "Sunday Vibes", tracks: 23, duration: "1h 32min", image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400", lastUpdated: "Il y a 1 semaine", isPrivate: true }
];

const myAlbums = [
  { id: 1, title: "After Hours", artist: "The Weeknd", year: "2020", image: "https://images.unsplash.com/photo-1482443346718-281bbeb78c44?w=400", tracks: 14 },
  { id: 2, title: "Future Nostalgia", artist: "Dua Lipa", year: "2020", image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=400", tracks: 11 },
  { id: 3, title: "Happier Than Ever", artist: "Billie Eilish", year: "2021", image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400", tracks: 16 },
  { id: 4, title: "Planet Her", artist: "Doja Cat", year: "2021", image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400", tracks: 14 }
];

const myArtists = [
  { id: 1, name: "Billie Eilish", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200", followers: "89M", albums: 3 },
  { id: 2, name: "The Weeknd", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200", followers: "78M", albums: 5 },
  { id: 3, name: "Dua Lipa", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200", followers: "65M", albums: 2 },
  { id: 4, name: "Ariana Grande", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200", followers: "92M", albums: 6 }
];

const likedSongs = [
  { id: 1, title: "Blinding Lights", artist: "The Weeknd", album: "After Hours", duration: "3:22", addedAt: "Il y a 2 jours", image: "https://images.unsplash.com/photo-1482443346718-281bbeb78c44?w=400" },
  { id: 2, title: "Levitating", artist: "Dua Lipa", album: "Future Nostalgia", duration: "3:23", addedAt: "Il y a 5 jours", image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=400" },
  { id: 3, title: "Happier Than Ever", artist: "Billie Eilish", album: "Happier Than Ever", duration: "4:58", addedAt: "Hier", image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400" },
  { id: 4, title: "Kiss Me More", artist: "Doja Cat", album: "Planet Her", duration: "3:28", addedAt: "Il y a 1 semaine", image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400" }
];

const menuItems = [
  { icon: Home, label: "Accueil", active: false },
  { icon: Compass, label: "Découverte", active: false },
  { icon: TrendingUp, label: "Top Charts", active: false },
  { icon: Library, label: "Ma Bibliothèque", active: true },
  { icon: Heart, label: "Favoris", active: false },
  { icon: Plus, label: "Créer Playlist", active: false }
];

// ==================== COMPOSANT: SIDEBAR ====================
const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: isOpen ? 0 : -300 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed lg:relative inset-y-0 left-0 z-50 w-64 bg-black/40 backdrop-blur-sm border-r border-white/5 flex flex-col"
      >
        <div className="p-6 border-b border-white/5">
          <motion.div className="flex items-center gap-3" whileHover={{ scale: 1.02 }}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#A00097] to-[#D000B3] flex items-center justify-center">
              <Music className="w-6 h-6" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-[#A00097] to-[#D000B3] bg-clip-text text-transparent">
              Mediatik
            </span>
          </motion.div>
        </div>

        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {menuItems.map((item, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ x: 4, backgroundColor: "rgba(160, 0, 151, 0.1)" }}
              whileTap={{ scale: 0.98 }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                item.active ? 'bg-gradient-to-r from-[#A00097]/20 to-[#D000B3]/20 text-white' : 'text-white/60 hover:text-white'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-sm font-medium">{item.label}</span>
            </motion.button>
          ))}
        </nav>

        <div className="p-4 border-t border-white/5">
          <motion.div className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 cursor-pointer" whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF4BC3] to-[#C05CFF] flex items-center justify-center">
              <User className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold">John Doe</p>
              <p className="text-xs text-white/50">Premium</p>
            </div>
            <Settings className="w-4 h-4 text-white/50" />
          </motion.div>
        </div>
      </motion.aside>
    </>
  );
};

// ==================== COMPOSANT: HEADER ====================
const Header = ({ onMenuClick, viewMode, setViewMode, sortBy, setSortBy }) => {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="relative bg-gradient-to-b from-[#A00097] via-[#B4009E] to-[#D000B3] px-4 lg:px-8 py-6"
    >
      <div className="flex items-center justify-between">
        <motion.button whileTap={{ scale: 0.9 }} className="lg:hidden" onClick={onMenuClick}>
          <Menu className="w-6 h-6" />
        </motion.button>

        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-2xl lg:text-3xl font-bold">Ma Bibliothèque</h1>
          <p className="text-sm text-white/70 mt-1">Gérez votre collection musicale</p>
        </div>

        <div className="flex items-center gap-4">
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="relative">
            <Bell className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#16FF6E] rounded-full border-2 border-[#D000B3]" />
          </motion.button>
          
          <motion.div whileHover={{ scale: 1.05 }} className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF4BC3] to-[#C05CFF] flex items-center justify-center cursor-pointer">
            <User className="w-5 h-5" />
          </motion.div>
        </div>
      </div>

      {/* Filters & View Toggle */}
      <div className="mt-6 flex flex-wrap gap-3 items-center">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
          <input
            type="text"
            placeholder="Rechercher dans la bibliothèque..."
            className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-full pl-12 pr-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-[#16FF6E] transition-all"
          />
        </div>

        <div className="flex gap-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setViewMode('grid')}
            className={`p-3 rounded-lg backdrop-blur-md transition-all ${
              viewMode === 'grid' ? 'bg-white/20 text-white' : 'bg-white/10 text-white/60'
            }`}
          >
            <Grid3x3 className="w-5 h-5" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setViewMode('list')}
            className={`p-3 rounded-lg backdrop-blur-md transition-all ${
              viewMode === 'list' ? 'bg-white/20 text-white' : 'bg-white/10 text-white/60'
            }`}
          >
            <List className="w-5 h-5" />
          </motion.button>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white text-sm focus:outline-none focus:border-[#16FF6E] transition-all"
          >
            <option value="recent">Plus récent</option>
            <option value="name">Nom A-Z</option>
            <option value="artist">Artiste</option>
            <option value="added">Date d'ajout</option>
          </select>
        </div>
      </div>
    </motion.header>
  );
};

// ==================== COMPOSANT: STATS ====================
const LibraryStats = () => {
  const stats = [
    { label: "Playlists", value: "6", icon: ListMusic, color: "#FF4BC3" },
    { label: "Albums", value: "24", icon: Disc, color: "#C05CFF" },
    { label: "Artistes", value: "47", icon: Mic2, color: "#16FF6E" },
    { label: "Titres aimés", value: "234", icon: Heart, color: "#A00097" }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -5 }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all cursor-pointer"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: stat.color + '20' }}>
              <stat.icon className="w-6 h-6" style={{ color: stat.color }} />
            </div>
            <div>
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-sm text-white/60">{stat.label}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// ==================== COMPOSANT: PLAYLIST CARD GRID ====================
const PlaylistCardGrid = ({ playlist, index }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="cursor-pointer"
    >
      <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5">
        <img src={playlist.image} alt={playlist.title} className="w-full h-full object-cover" />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {playlist.isPrivate && (
          <div className="absolute top-3 left-3 px-3 py-1 bg-white/90 text-[#1B1B1B] text-xs font-bold rounded-full backdrop-blur-sm">
            Privée
          </div>
        )}

        <motion.button
          animate={{ scale: isHovered ? 1 : 0, opacity: isHovered ? 1 : 0 }}
          whileHover={{ scale: 1.1 }}
          className="absolute bottom-4 right-4 w-14 h-14 bg-[#16FF6E] rounded-full flex items-center justify-center shadow-2xl"
        >
          <Play className="w-6 h-6 text-[#1B1B1B] ml-1" fill="currentColor" />
        </motion.button>

        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="font-bold text-lg mb-1 truncate">{playlist.title}</h3>
          <p className="text-xs text-white/80">{playlist.tracks} titres • {playlist.duration}</p>
        </div>
      </div>

      <div className="mt-3">
        <p className="text-xs text-white/50">{playlist.lastUpdated}</p>
      </div>
    </motion.div>
  );
};

// ==================== COMPOSANT: PLAYLIST CARD LIST ====================
const PlaylistCardList = ({ playlist, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.08)" }}
      className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/8 transition-all cursor-pointer group"
    >
      <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
        <img src={playlist.image} alt={playlist.title} className="w-full h-full object-cover" />
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="font-semibold truncate">{playlist.title}</h3>
        <p className="text-sm text-white/60">{playlist.tracks} titres • {playlist.duration}</p>
      </div>

      <div className="hidden md:block text-sm text-white/60">
        {playlist.lastUpdated}
      </div>

      {playlist.isPrivate && (
        <div className="px-2 py-1 bg-white/10 text-xs rounded-full">Privée</div>
      )}

      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="p-2 hover:bg-white/10 rounded-lg">
          <Edit2 className="w-4 h-4" />
        </motion.button>
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="p-2 hover:bg-white/10 rounded-lg">
          <Share2 className="w-4 h-4" />
        </motion.button>
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="p-2 hover:bg-red-500/20 rounded-lg text-red-400">
          <Trash2 className="w-4 h-4" />
        </motion.button>
      </div>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-10 h-10 bg-[#16FF6E] rounded-full flex items-center justify-center flex-shrink-0"
      >
        <Play className="w-5 h-5 text-[#1B1B1B] ml-0.5" fill="currentColor" />
      </motion.button>
    </motion.div>
  );
};

// ==================== COMPOSANT: ALBUM CARD ====================
const AlbumCard = ({ album, index }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="cursor-pointer"
    >
      <div className="relative aspect-square rounded-xl overflow-hidden">
        <img src={album.image} alt={album.title} className="w-full h-full object-cover" />
        
        <motion.button
          animate={{ scale: isHovered ? 1 : 0, opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center"
        >
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
            <Play className="w-7 h-7 text-[#1B1B1B] ml-1" fill="currentColor" />
          </div>
        </motion.button>
      </div>
      
      <div className="mt-3">
        <h3 className="font-semibold text-sm truncate">{album.title}</h3>
        <p className="text-xs text-white/60 truncate">{album.artist}</p>
        <p className="text-xs text-white/40 mt-1">{album.year} • {album.tracks} titres</p>
      </div>
    </motion.div>
  );
};

// ==================== COMPOSANT: ARTIST CARD ====================
const ArtistCardLib = ({ artist, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="text-center cursor-pointer"
    >
      <div className="relative w-32 h-32 mx-auto mb-3">
        <div className="w-full h-full rounded-full overflow-hidden ring-4 ring-[#A00097]/30">
          <img src={artist.image} alt={artist.name} className="w-full h-full object-cover" />
        </div>
        <div className="absolute -bottom-1 -right-1 w-10 h-10 bg-[#16FF6E] rounded-full flex items-center justify-center border-4 border-[#1B1B1B]">
          <Play className="w-5 h-5 text-[#1B1B1B] ml-0.5" fill="currentColor" />
        </div>
      </div>
      <h3 className="font-semibold text-sm">{artist.name}</h3>
      <p className="text-xs text-white/50 mt-1">{artist.albums} albums</p>
    </motion.div>
  );
};

// ==================== PAGE PRINCIPALE ====================
const MediatikLibrary = () => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [viewMode, setViewMode] = React.useState('grid');
  const [sortBy, setSortBy] = React.useState('recent');
  const [activeTab, setActiveTab] = React.useState('playlists');

  const tabs = [
    { id: 'playlists', label: 'Playlists', icon: ListMusic },
    { id: 'albums', label: 'Albums', icon: Disc },
    { id: 'artists', label: 'Artistes', icon: Mic2 },
    { id: 'liked', label: 'Titres aimés', icon: Heart }
  ];

  return (
    <div className="flex h-screen bg-[#1B1B1B] text-white overflow-hidden">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header 
          onMenuClick={() => setSidebarOpen(!sidebarOpen)}
          viewMode={viewMode}
          setViewMode={setViewMode}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />

        <div className="flex-1 overflow-y-auto px-4 lg:px-8 py-6">
          <LibraryStats />

          {/* Tabs */}
          <div className="flex gap-2 mb-8 overflow-x-auto pb-2 scrollbar-hide">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-[#A00097] to-[#D000B3] text-white'
                    : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                {tab.label}
              </motion.button>
            ))}
          </div>

          {/* Content */}
          {activeTab === 'playlists' && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">Mes Playlists</h2>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#A00097] to-[#D000B3] rounded-full font-medium"
                >
                  <Plus className="w-5 h-5" />
                  Nouvelle playlist
                </motion.button>
              </div>

              {viewMode === 'grid' ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                  {myPlaylists.map((playlist, index) => (
                    <PlaylistCardGrid key={playlist.id} playlist={playlist} index={index} />
                  ))}
                </div>
              ) : (
                <div className="space-y-2">
                  {myPlaylists.map((playlist, index) => (
                    <PlaylistCardList key={playlist.id} playlist={playlist} index={index} />
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === 'albums' && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Mes Albums</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                {myAlbums.map((album, index) => (
                  <AlbumCard key={album.id} album={album} index={index} />
                ))}
              </div>
            </div>
          )}

          {activeTab === 'artists' && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Mes Artistes</h2>
              <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
                {myArtists.map((artist, index) => (
                  <ArtistCardLib key={artist.id} artist={artist} index={index} />
                ))}
              </div>
            </div>
          )}

          {activeTab === 'liked' && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Titres aimés</h2>
              <div className="space-y-2">
                {likedSongs.map((song, index) => (
                  <motion.div
                    key={song.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/8 transition-all cursor-pointer group"
                  >
                    <div className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0">
                      <img src={song.image} alt={song.title} className="w-full h-full object-cover" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm truncate">{song.title}</h3>
                      <p className="text-xs text-white/60 truncate">{song.artist}</p>
                    </div>

                    <div className="hidden md:block text-sm text-white/60 min-w-[120px]">
                      {song.album}
                    </div>

                    <div className="hidden lg:block text-sm text-white/60">
                      {song.addedAt}
                    </div>

                    <div className="text-sm text-white/60">
                      {song.duration}
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-[#FF4BC3] hover:text-white transition-colors"
                    >
                      <Heart className="w-5 h-5" fill="currentColor" />
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-[#16FF6E] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Play className="w-5 h-5 text-[#1B1B1B] ml-0.5" fill="currentColor" />
                    </motion.button>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MediatikLibrary;