import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Menu, Search, Bell, Play, Heart, Home, Compass, Library, Plus, 
  TrendingUp, Music, User, Settings, ChevronRight, Filter,
  Edit2, Camera, Mail, MapPin, Calendar, Award, Crown,
  Headphones, Clock, TrendingDown, Share2, LogOut, Shield
} from 'lucide-react';

// ==================== DONNÉES PROFIL ====================
const userProfile = {
  name: "John Doe",
  username: "@johndoe",
  email: "john.doe@example.com",
  location: "Paris, France",
  joinedDate: "Janvier 2022",
  bio: "Passionné de musique électro et indie pop 🎵 Toujours à la recherche de nouveaux sons",
  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
  coverImage: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1200",
  isPremium: true,
  followers: "1.2K",
  following: "847"
};

const listeningStats = [
  { label: "Temps d'écoute total", value: "487h", subtitle: "Ce mois", icon: Headphones, color: "#16FF6E" },
  { label: "Titres écoutés", value: "2,341", subtitle: "+12% vs mois dernier", icon: Music, color: "#FF4BC3" },
  { label: "Artistes uniques", value: "156", subtitle: "Dans 24 genres", icon: TrendingUp, color: "#C05CFF" },
  { label: "Playlists créées", value: "23", subtitle: "142 titres au total", icon: Library, color: "#A00097" }
];

const topGenres = [
  { name: "Electro Pop", percentage: 32, color: "#16FF6E" },
  { name: "Indie Rock", percentage: 24, color: "#FF4BC3" },
  { name: "Hip-Hop", percentage: 18, color: "#C05CFF" },
  { name: "R&B", percentage: 15, color: "#A00097" },
  { name: "Autres", percentage: 11, color: "#666" }
];

const topArtistsThisMonth = [
  { id: 1, name: "Billie Eilish", plays: "143", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200" },
  { id: 2, name: "The Weeknd", plays: "128", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200" },
  { id: 3, name: "Dua Lipa", plays: "115", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200" },
  { id: 4, name: "Drake", plays: "98", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200" }
];

const topTracksThisMonth = [
  { id: 1, title: "Blinding Lights", artist: "The Weeknd", plays: "47", image: "https://images.unsplash.com/photo-1482443346718-281bbeb78c44?w=400" },
  { id: 2, title: "Levitating", artist: "Dua Lipa", plays: "42", image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=400" },
  { id: 3, title: "Happier Than Ever", artist: "Billie Eilish", plays: "38", image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400" }
];

const achievements = [
  { id: 1, title: "Explorateur Musical", description: "Écouté 100+ artistes différents", icon: Compass, unlocked: true, color: "#16FF6E" },
  { id: 2, title: "Noctambule", description: "Écouté 50h après minuit", icon: Clock, unlocked: true, color: "#C05CFF" },
  { id: 3, title: "Créateur de Playlists", description: "Créé 20 playlists", icon: Library, unlocked: true, color: "#FF4BC3" },
  { id: 4, title: "Mélomane Expert", description: "500h d'écoute au total", icon: Award, unlocked: false, color: "#666" }
];

const recentActivity = [
  { id: 1, action: "A aimé l'album", item: "After Hours", artist: "The Weeknd", time: "Il y a 2h", image: "https://images.unsplash.com/photo-1482443346718-281bbeb78c44?w=400" },
  { id: 2, action: "A ajouté à la playlist", item: "Road Trip Vibes", artist: "15 titres", time: "Il y a 5h", image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400" },
  { id: 3, action: "A suivi", item: "Dua Lipa", artist: "Artiste", time: "Hier", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200" }
];

const menuItems = [
  { icon: Home, label: "Accueil", active: false },
  { icon: Compass, label: "Découverte", active: false },
  { icon: TrendingUp, label: "Top Charts", active: false },
  { icon: Library, label: "Ma Bibliothèque", active: false },
  { icon: Heart, label: "Favoris", active: false },
  { icon: Plus, label: "Créer Playlist", active: false }
];

// ==================== COMPOSANTS ====================
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
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#A00097] to-[#D000B3] flex items-center justify-center">
              <Music className="w-6 h-6" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-[#A00097] to-[#D000B3] bg-clip-text text-transparent">Mediatik</span>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-white/60 hover:text-white hover:bg-white/5"
            >
              <item.icon className="w-5 h-5" />
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-white/5">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-[#A00097]/20 to-[#D000B3]/20 cursor-pointer">
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

const ProfileHeader = ({ onMenuClick }) => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="relative"
    >
      {/* Cover Image */}
      <div className="relative h-64 overflow-hidden">
        <img src={userProfile.coverImage} alt="Cover" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1B1B1B]/50 to-[#1B1B1B]" />
        
        {/* Mobile Menu */}
        <button onClick={onMenuClick} className="absolute top-6 left-6 lg:hidden w-10 h-10 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center">
          <Menu className="w-6 h-6" />
        </button>

        {/* Edit Cover Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="absolute top-6 right-6 px-4 py-2 bg-black/40 backdrop-blur-md rounded-full flex items-center gap-2 text-sm font-medium"
        >
          <Camera className="w-4 h-4" />
          Modifier
        </motion.button>
      </div>

      {/* Profile Info */}
      <div className="relative px-4 lg:px-8 -mt-20">
        <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-end">
          {/* Avatar */}
          <div className="relative">
            <div className="w-40 h-40 rounded-full border-4 border-[#1B1B1B] overflow-hidden bg-gradient-to-br from-[#A00097] to-[#D000B3]">
              <img src={userProfile.avatar} alt={userProfile.name} className="w-full h-full object-cover" />
            </div>
            
            {userProfile.isPremium && (
              <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-full flex items-center justify-center border-4 border-[#1B1B1B]">
                <Crown className="w-6 h-6 text-white" />
              </div>
            )}

            <motion.button
              whileHover={{ scale: 1.1 }}
              className="absolute bottom-2 right-2 w-10 h-10 bg-[#16FF6E] rounded-full flex items-center justify-center"
            >
              <Camera className="w-5 h-5 text-[#1B1B1B]" />
            </motion.button>
          </div>

          {/* Info */}
          <div className="flex-1">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold flex items-center gap-3">
                  {userProfile.name}
                  {userProfile.isPremium && (
                    <span className="px-3 py-1 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black text-sm font-bold rounded-full">
                      Premium
                    </span>
                  )}
                </h1>
                <p className="text-white/60 mt-1">{userProfile.username}</p>
                <p className="text-sm text-white/80 mt-3 max-w-2xl">{userProfile.bio}</p>
                
                <div className="flex flex-wrap gap-4 mt-4 text-sm text-white/60">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {userProfile.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Membre depuis {userProfile.joinedDate}
                  </div>
                </div>

                <div className="flex gap-6 mt-4">
                  <div>
                    <span className="text-xl font-bold">{userProfile.followers}</span>
                    <span className="text-sm text-white/60 ml-2">Abonnés</span>
                  </div>
                  <div>
                    <span className="text-xl font-bold">{userProfile.following}</span>
                    <span className="text-sm text-white/60 ml-2">Abonnements</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-3 bg-gradient-to-r from-[#A00097] to-[#D000B3] rounded-full font-medium flex items-center gap-2"
                >
                  <Edit2 className="w-5 h-5" />
                  Modifier le profil
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-3 bg-white/10 backdrop-blur-md rounded-full"
                >
                  <Share2 className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// ==================== STATS CARD ====================
const StatCard = ({ stat, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm text-white/60 mb-2">{stat.label}</p>
          <p className="text-3xl font-bold">{stat.value}</p>
          <p className="text-xs text-white/50 mt-2">{stat.subtitle}</p>
        </div>
        <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: stat.color + '20' }}>
          <stat.icon className="w-6 h-6" style={{ color: stat.color }} />
        </div>
      </div>
    </motion.div>
  );
};

// ==================== GENRE CHART ====================
const GenreChart = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
    >
      <h3 className="text-xl font-bold mb-6">Top Genres</h3>
      
      <div className="space-y-4">
        {topGenres.map((genre, index) => (
          <div key={index}>
            <div className="flex justify-between text-sm mb-2">
              <span>{genre.name}</span>
              <span className="text-white/60">{genre.percentage}%</span>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${genre.percentage}%` }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="h-full rounded-full"
                style={{ backgroundColor: genre.color }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

// ==================== TOP ARTIST MINI ====================
const TopArtistMini = ({ artist, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/8 transition-all cursor-pointer group"
    >
      <span className="text-xl font-bold text-white/40 w-6">{index + 1}</span>
      
      <div className="w-12 h-12 rounded-full overflow-hidden">
        <img src={artist.image} alt={artist.name} className="w-full h-full object-cover" />
      </div>

      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-sm truncate">{artist.name}</h4>
        <p className="text-xs text-white/60">{artist.plays} écoutes</p>
      </div>

      <Play className="w-5 h-5 text-[#16FF6E] opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
};

// ==================== ACHIEVEMENT CARD ====================
const AchievementCard = ({ achievement, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 }}
      className={`relative p-6 rounded-2xl border-2 ${
        achievement.unlocked 
          ? 'bg-white/5 border-white/20' 
          : 'bg-white/5 border-white/5 opacity-50'
      }`}
    >
      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${
        achievement.unlocked ? 'bg-gradient-to-br' : 'bg-white/10'
      }`} style={achievement.unlocked ? { background: `linear-gradient(135deg, ${achievement.color}, ${achievement.color}80)` } : {}}>
        <achievement.icon className="w-8 h-8" />
      </div>

      <h4 className="font-bold mb-2">{achievement.title}</h4>
      <p className="text-sm text-white/60">{achievement.description}</p>

      {achievement.unlocked && (
        <div className="absolute top-4 right-4 w-8 h-8 bg-[#16FF6E] rounded-full flex items-center justify-center">
          <Award className="w-5 h-5 text-[#1B1B1B]" />
        </div>
      )}
    </motion.div>
  );
};

// ==================== PAGE PRINCIPALE ====================
const MediatikProfile = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-[#1B1B1B] text-white overflow-hidden">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <ProfileHeader onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

        <div className="flex-1 overflow-y-auto px-4 lg:px-8 py-8 space-y-8">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {listeningStats.map((stat, index) => (
              <StatCard key={index} stat={stat} index={index} />
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Top Artists */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-bold mb-4">Top Artistes du mois</h3>
                <div className="space-y-2">
                  {topArtistsThisMonth.map((artist, index) => (
                    <TopArtistMini key={artist.id} artist={artist} index={index} />
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-bold mb-4">Récompenses</h3>
                <div className="grid grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <AchievementCard key={achievement.id} achievement={achievement} index={index} />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <GenreChart />

              {/* Recent Activity */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-bold mb-4">Activité récente</h3>
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex gap-3">
                      <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                        <img src={activity.image} alt="" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm">
                          <span className="text-white/60">{activity.action}</span>
                          <br />
                          <span className="font-semibold">{activity.item}</span>
                        </p>
                        <p className="text-xs text-white/50 mt-1">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Settings Quick Links */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-bold mb-4">Paramètres</h3>
                <div className="space-y-2">
                  <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors text-left">
                    <Shield className="w-5 h-5 text-white/60" />
                    <span className="text-sm">Confidentialité</span>
                    <ChevronRight className="w-4 h-4 ml-auto text-white/40" />
                  </button>
                  <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors text-left">
                    <Bell className="w-5 h-5 text-white/60" />
                    <span className="text-sm">Notifications</span>
                    <ChevronRight className="w-4 h-4 ml-auto text-white/40" />
                  </button>
                  <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors text-left">
                    <Settings className="w-5 h-5 text-white/60" />
                    <span className="text-sm">Préférences</span>
                    <ChevronRight className="w-4 h-4 ml-auto text-white/40" />
                  </button>
                  <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-red-500/20 transition-colors text-left text-red-400">
                    <LogOut className="w-5 h-5" />
                    <span className="text-sm">Déconnexion</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediatikProfile;