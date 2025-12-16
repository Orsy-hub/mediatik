import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Menu, Search, Bell, Play, Heart, Home, Compass, Library, Plus, 
  TrendingUp, Music, User, Settings, ChevronRight, Filter,
  TrendingDown, Minus, ArrowUp, ArrowDown, Globe, Calendar
} from 'lucide-react';

// ==================== DONNÉES TOP CHARTS ====================
const globalTop50 = [
  { id: 1, title: "Anti-Hero", artist: "Taylor Swift", rank: 1, prevRank: 2, plays: "125.5M", image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400", trend: "up", weeks: 8 },
  { id: 2, title: "Flowers", artist: "Miley Cyrus", rank: 2, prevRank: 1, plays: "118.2M", image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400", trend: "down", weeks: 12 },
  { id: 3, title: "Unholy", artist: "Sam Smith ft. Kim Petras", rank: 3, prevRank: 3, plays: "98.7M", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400", trend: "same", weeks: 15 },
  { id: 4, title: "Vampire", artist: "Olivia Rodrigo", rank: 4, prevRank: 7, plays: "87.3M", image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400", trend: "up", weeks: 5 },
  { id: 5, title: "Kill Bill", artist: "SZA", rank: 5, prevRank: 4, plays: "82.1M", image: "https://images.unsplash.com/photo-1487537708572-3c850b5e856a?w=400", trend: "down", weeks: 18 },
  { id: 6, title: "Cruel Summer", artist: "Taylor Swift", rank: 6, prevRank: 9, plays: "76.8M", image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400", trend: "up", weeks: 22 },
  { id: 7, title: "Calm Down", artist: "Rema & Selena Gomez", rank: 7, prevRank: 5, plays: "71.5M", image: "https://images.unsplash.com/photo-1482443346718-281bbeb78c44?w=400", trend: "down", weeks: 28 },
  { id: 8, title: "Escapism", artist: "RAYE ft. 070 Shake", rank: 8, prevRank: 10, plays: "69.2M", image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=400", trend: "up", weeks: 10 },
  { id: 9, title: "Die For You", artist: "The Weeknd", rank: 9, prevRank: 8, plays: "65.9M", image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400", trend: "down", weeks: 32 },
  { id: 10, title: "Creepin'", artist: "Metro Boomin, The Weeknd", rank: 10, prevRank: 6, plays: "62.4M", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400", trend: "down", weeks: 19 }
];

const topArtists = [
  { id: 1, name: "Taylor Swift", rank: 1, streams: "2.8B", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200", genre: "Pop" },
  { id: 2, name: "The Weeknd", rank: 2, streams: "2.5B", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200", genre: "R&B" },
  { id: 3, name: "Drake", rank: 3, streams: "2.3B", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200", genre: "Hip-Hop" },
  { id: 4, name: "Bad Bunny", rank: 4, streams: "2.1B", image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=200", genre: "Reggaeton" }
];

const topAlbums = [
  { id: 1, title: "Midnights", artist: "Taylor Swift", rank: 1, image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400", streams: "1.2B" },
  { id: 2, title: "SOS", artist: "SZA", rank: 2, image: "https://images.unsplash.com/photo-1487537708572-3c850b5e856a?w=400", streams: "980M" },
  { id: 3, title: "Un Verano Sin Ti", artist: "Bad Bunny", rank: 3, image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400", streams: "845M" },
  { id: 4, title: "Harry's House", artist: "Harry Styles", rank: 4, image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400", streams: "732M" }
];

const viralTracks = [
  { id: 1, title: "Cupid", artist: "FIFTY FIFTY", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400", viralScore: 98, platform: "TikTok" },
  { id: 2, title: "Paint The Town Red", artist: "Doja Cat", image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400", viralScore: 95, platform: "Instagram" },
  { id: 3, title: "greedy", artist: "Tate McRae", image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=400", viralScore: 92, platform: "TikTok" },
  { id: 4, title: "Snooze", artist: "SZA", image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400", viralScore: 89, platform: "Twitter" }
];

const menuItems = [
  { icon: Home, label: "Accueil", active: false },
  { icon: Compass, label: "Découverte", active: false },
  { icon: TrendingUp, label: "Top Charts", active: true },
  { icon: Library, label: "Ma Bibliothèque", active: false },
  { icon: Heart, label: "Favoris", active: false },
  { icon: Plus, label: "Créer Playlist", active: false }
];

// ==================== COMPOSANTS SIDEBAR & HEADER (identiques) ====================
const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
        />
      )}

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
            <span className="text-xl font-bold bg-gradient-to-r from-[#A00097] to-[#D000B3] bg-clip-text text-transparent">Mediatik</span>
          </motion.div>
        </div>

        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {menuItems.map((item, index) => (
            <motion.button
              key={index}
              whileHover={{ x: 4, backgroundColor: "rgba(160, 0, 151, 0.1)" }}
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
          <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF4BC3] to-[#C05CFF] flex items-center justify-center">
              <User className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold">John Doe</p>
              <p className="text-xs text-white/50">Premium</p>
            </div>
            <Settings className="w-4 h-4 text-white/50" />
          </div>
        </div>
      </motion.aside>
    </>
  );
};

const Header = ({ onMenuClick, region, setRegion }) => {
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
          <h1 className="text-2xl lg:text-3xl font-bold">Top Charts</h1>
          <p className="text-sm text-white/70 mt-1">Ce qui cartonne en ce moment</p>
        </div>

        <div className="flex items-center gap-4">
          <motion.button whileHover={{ scale: 1.1 }} className="relative">
            <Bell className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#16FF6E] rounded-full border-2 border-[#D000B3]" />
          </motion.button>
          
          <motion.div whileHover={{ scale: 1.05 }} className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF4BC3] to-[#C05CFF] flex items-center justify-center cursor-pointer">
            <User className="w-5 h-5" />
          </motion.div>
        </div>
      </div>

      <div className="mt-6 flex gap-3 items-center">
        <select
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          className="px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white focus:outline-none focus:border-[#16FF6E] transition-all"
        >
          <option value="global">🌍 Global</option>
          <option value="fr">🇫🇷 France</option>
          <option value="us">🇺🇸 États-Unis</option>
          <option value="uk">🇬🇧 Royaume-Uni</option>
        </select>

        <select className="px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white focus:outline-none focus:border-[#16FF6E] transition-all">
          <option value="week">Cette semaine</option>
          <option value="month">Ce mois</option>
          <option value="year">Cette année</option>
        </select>
      </div>
    </motion.header>
  );
};

// ==================== COMPOSANT: CHART ENTRY ====================
const ChartEntry = ({ song, index }) => {
  const getTrendIcon = () => {
    if (song.trend === 'up') return <ArrowUp className="w-4 h-4 text-[#16FF6E]" />;
    if (song.trend === 'down') return <ArrowDown className="w-4 h-4 text-red-400" />;
    return <Minus className="w-4 h-4 text-white/40" />;
  };

  const getRankChange = () => {
    const change = song.prevRank - song.rank;
    if (change > 0) return `+${change}`;
    if (change < 0) return change;
    return '-';
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.08)" }}
      className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/8 transition-all cursor-pointer group"
    >
      {/* Rank */}
      <div className="flex items-center gap-3 w-20">
        <span className={`text-2xl font-bold ${
          song.rank <= 3 ? 'bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent' : ''
        }`}>
          {song.rank}
        </span>
        <div className="flex flex-col items-center">
          {getTrendIcon()}
          <span className={`text-xs ${
            song.trend === 'up' ? 'text-[#16FF6E]' : 
            song.trend === 'down' ? 'text-red-400' : 
            'text-white/40'
          }`}>
            {getRankChange()}
          </span>
        </div>
      </div>

      {/* Cover */}
      <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 relative">
        <img src={song.image} alt={song.title} className="w-full h-full object-cover" />
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-black/60 flex items-center justify-center"
        >
          <Play className="w-6 h-6" fill="white" />
        </motion.div>
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold truncate">{song.title}</h3>
        <p className="text-sm text-white/60 truncate">{song.artist}</p>
      </div>

      {/* Stats */}
      <div className="hidden md:flex items-center gap-6 text-sm text-white/60">
        <div className="flex items-center gap-2">
          <Play className="w-4 h-4" />
          <span>{song.plays}</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          <span>{song.weeks}w</span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2">
        <motion.button whileHover={{ scale: 1.2 }} className="text-white/60 hover:text-[#FF4BC3]">
          <Heart className="w-5 h-5" />
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="w-10 h-10 bg-[#16FF6E] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Play className="w-5 h-5 text-[#1B1B1B] ml-0.5" fill="currentColor" />
        </motion.button>
      </div>
    </motion.div>
  );
};

// ==================== COMPOSANT: TOP ARTIST CARD ====================
const TopArtistCard = ({ artist, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="relative cursor-pointer"
    >
      <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
        <img src={artist.image} alt={artist.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        {/* Rank Badge */}
        <div className={`absolute top-4 left-4 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold ${
          artist.rank === 1 ? 'bg-[#FFD700]' : 
          artist.rank === 2 ? 'bg-[#C0C0C0]' : 
          artist.rank === 3 ? 'bg-[#CD7F32]' : 
          'bg-white/20 backdrop-blur-sm'
        } ${artist.rank <= 3 ? 'text-black' : 'text-white'}`}>
          {artist.rank}
        </div>

        {/* Play Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="absolute bottom-4 right-4 w-14 h-14 bg-[#16FF6E] rounded-full flex items-center justify-center shadow-2xl"
        >
          <Play className="w-6 h-6 text-[#1B1B1B] ml-1" fill="currentColor" />
        </motion.button>

        {/* Info */}
        <div className="absolute bottom-4 left-4 right-20">
          <h3 className="font-bold text-lg truncate">{artist.name}</h3>
          <p className="text-sm text-white/80">{artist.streams} streams</p>
          <span className="inline-block mt-2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs">{artist.genre}</span>
        </div>
      </div>
    </motion.div>
  );
};

// ==================== COMPOSANT: VIRAL TRACK ====================
const ViralTrack = ({ track, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="relative cursor-pointer"
    >
      <div className="relative aspect-square rounded-xl overflow-hidden">
        <img src={track.image} alt={track.title} className="w-full h-full object-cover" />
        
        {/* Viral Badge */}
        <div className="absolute top-3 right-3 px-3 py-1 bg-[#16FF6E] text-[#1B1B1B] text-xs font-bold rounded-full flex items-center gap-1">
          <TrendingUp className="w-3 h-3" />
          Viral
        </div>

        {/* Platform Badge */}
        <div className="absolute top-3 left-3 px-3 py-1 bg-white/90 text-[#1B1B1B] text-xs font-bold rounded-full">
          {track.platform}
        </div>

        {/* Score */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
          <div className="mb-2">
            <div className="flex justify-between text-xs text-white/80 mb-1">
              <span>Score viral</span>
              <span>{track.viralScore}%</span>
            </div>
            <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${track.viralScore}%` }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
                className="h-full bg-[#16FF6E] rounded-full"
              />
            </div>
          </div>
          <h3 className="font-semibold text-sm truncate">{track.title}</h3>
          <p className="text-xs text-white/70 truncate">{track.artist}</p>
        </div>
      </div>
    </motion.div>
  );
};

// ==================== PAGE PRINCIPALE ====================
const MediatikCharts = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [region, setRegion] = useState('global');

  return (
    <div className="flex h-screen bg-[#1B1B1B] text-white overflow-hidden">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} region={region} setRegion={setRegion} />

        <div className="flex-1 overflow-y-auto px-4 lg:px-8 py-6 space-y-8">
          {/* Top 50 Global */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold">Top 50 Global</h2>
                <p className="text-sm text-white/60 mt-1">Les morceaux les plus écoutés dans le monde</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-gradient-to-r from-[#A00097] to-[#D000B3] rounded-full font-medium flex items-center gap-2"
              >
                <Play className="w-5 h-5" />
                Tout lire
              </motion.button>
            </div>

            <div className="space-y-2">
              {globalTop50.map((song, index) => (
                <ChartEntry key={song.id} song={song} index={index} />
              ))}
            </div>
          </section>

          {/* Top Artistes */}
          <section>
            <div className="mb-4">
              <h2 className="text-2xl font-bold">Top Artistes</h2>
              <p className="text-sm text-white/60 mt-1">Les artistes les plus streamés du moment</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {topArtists.map((artist, index) => (
                <TopArtistCard key={artist.id} artist={artist} index={index} />
              ))}
            </div>
          </section>

          {/* Viral Tracks */}
          <section>
            <div className="mb-4">
              <h2 className="text-2xl font-bold">Morceaux Viraux</h2>
              <p className="text-sm text-white/60 mt-1">Tendances sur les réseaux sociaux</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {viralTracks.map((track, index) => (
                <ViralTrack key={track.id} track={track} index={index} />
              ))}
            </div>
          </section>

          {/* Top Albums */}
          <section>
            <div className="mb-4">
              <h2 className="text-2xl font-bold">Top Albums</h2>
              <p className="text-sm text-white/60 mt-1">Les albums qui cartonnent</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {topAlbums.map((album, index) => (
                <motion.div
                  key={album.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="cursor-pointer"
                >
                  <div className="relative aspect-square rounded-xl overflow-hidden group">
                    <img src={album.image} alt={album.title} className="w-full h-full object-cover" />
                    
                    <div className={`absolute top-3 left-3 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      album.rank === 1 ? 'bg-[#FFD700] text-black' : 
                      album.rank === 2 ? 'bg-[#C0C0C0] text-black' : 
                      'bg-[#CD7F32] text-black'
                    }`}>
                      {album.rank}
                    </div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-black/50 flex items-center justify-center"
                    >
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                        <Play className="w-7 h-7 text-[#1B1B1B] ml-1" fill="currentColor" />
                      </div>
                    </motion.div>
                  </div>
                  
                  <div className="mt-3">
                    <h3 className="font-semibold text-sm truncate">{album.title}</h3>
                    <p className="text-xs text-white/60 truncate">{album.artist}</p>
                    <p className="text-xs text-[#16FF6E] mt-1">{album.streams} streams</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MediatikCharts;