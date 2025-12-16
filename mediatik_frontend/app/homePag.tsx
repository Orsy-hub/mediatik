"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, Search, Bell, Play, Heart, 
   Music, 
  User, Settings, ChevronRight, Filter, Clock,
  
  MoreVertical, Download, Share2, ListMusic
} from 'lucide-react';
import { Aside } from '@/components/layout/Aside';
import { useSidebar } from '@/hooks/useAsidebar';
import Header from '@/components/layout/Header';
import { Section } from '@/components/Section';
import { continueListening, dailyMixes, favoriteArtists, newReleases, recentlyPlayed, recommendedPlaylists } from '@/lib/data';
import { RecentCard } from '@/components/cards/RecentCard';
import { ContinueCard } from '@/components/cards/ContinuueCard';
import { PlaylistCard } from '@/components/cards/PlaylistCard';
import { DailyMixCard } from '@/components/cards/DailyMixCard';
import { ArtistCard } from '@/components/cards/ArtistCard';
import { NewReleaseCard } from '@/components/cards/NewReleaseCard';






// ==================== COMPOSANT: HEADER ====================
// const Header = ({ onMenuClick }) => {
//   const currentHour = new Date().getHours();
//   const greeting = currentHour < 12 ? "Bonjour" : currentHour < 18 ? "Bon après-midi" : "Bonsoir";

//   return (
//     <motion.header 
//       initial={{ y: -100, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       className="relative bg-gradient-to-b from-[#A00097] via-[#B4009E] via-[#C200A9] to-[#D000B3] px-4 lg:px-8 py-6"
//     >
//       <div className="flex items-center justify-between">
//         {/* Mobile Menu */}
//         <motion.button 
//           whileTap={{ scale: 0.9 }}
//           className="lg:hidden"
//           onClick={onMenuClick}
//         >
//           <Menu className="w-6 h-6" />
//         </motion.button>

//         {/* Titre avec greeting personnalisé */}
//         <div className="flex-1 text-center lg:text-left lg:ml-0">
//           <h1 className="text-2xl lg:text-3xl font-bold">{greeting}</h1>
//           <p className="text-sm text-white/70 mt-1">Prêt à découvrir de nouveaux sons ?</p>
//         </div>

//         {/* Actions */}
//         <div className="flex items-center gap-4">
//           <motion.button 
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//             className="relative"
//           >
//             <Bell className="w-6 h-6" />
//             <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#16FF6E] rounded-full border-2 border-[#D000B3]" />
//           </motion.button>
          
//           <motion.div 
//             whileHover={{ scale: 1.05 }}
//             className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF4BC3] to-[#C05CFF] flex items-center justify-center cursor-pointer"
//           >
//             <User className="w-5 h-5" />
//           </motion.div>
//         </div>
//       </div>

//       {/* Barre de recherche */}
//       <motion.div 
//         initial={{ scale: 0.95, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ delay: 0.2 }}
//         className="mt-6"
//       >
//         <div className="relative max-w-2xl mx-auto lg:mx-0">
//           <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
//           <motion.input
//             whileFocus={{ 
//               scale: 1.02, 
//               boxShadow: "0 0 30px rgba(22, 255, 110, 0.3)" 
//             }}
//             type="text"
//             placeholder="Artistes, titres ou albums..."
//             className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-full pl-12 pr-14 py-3 text-white placeholder-white/50 focus:outline-none focus:border-[#16FF6E] transition-all"
//           />
//           <motion.button 
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//             className="absolute right-4 top-1/2 -translate-y-1/2"
//           >
//             <Filter className="w-5 h-5 text-white/70" />
//           </motion.button>
//         </div>
//       </motion.div>
//     </motion.header>
//   );
// };

// // ==================== COMPOSANT: SECTION ====================


// // ==================== COMPOSANT: RECENTLY PLAYED CARD ====================
// const RecentCard = ({ song, index }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <motion.div
//       initial={{ opacity: 0, x: -20 }}
//       animate={{ opacity: 1, x: 0 }}
//       transition={{ delay: index * 0.1 }}
//       whileHover={{ y: -5 }}
//       onHoverStart={() => setIsHovered(true)}
//       onHoverEnd={() => setIsHovered(false)}
//       className="flex items-center gap-4 bg-white/5 hover:bg-white/10 rounded-xl p-3 cursor-pointer transition-all group"
//     >
//       <div className="relative flex-shrink-0 w-14 h-14 rounded-lg overflow-hidden">
//         <img src={song.image} alt={song.title} className="w-full h-full object-cover" />
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: isHovered ? 1 : 0 }}
//           className="absolute inset-0 bg-black/50 flex items-center justify-center"
//         >
//           <Play className="w-6 h-6" fill="white" />
//         </motion.div>
//       </div>

//       <div className="flex-1 min-w-0">
//         <h3 className="font-semibold text-sm truncate">{song.title}</h3>
//         <p className="text-xs text-white/60 truncate">{song.artist}</p>
//       </div>

//       <div className="flex items-center gap-3 text-white/60">
//         <Clock className="w-4 h-4" />
//         <span className="text-xs">{song.duration}</span>
//         <MoreVertical className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
//       </div>
//     </motion.div>
//   );
// };

// // ==================== COMPOSANT: PLAYLIST CARD ====================
// const PlaylistCard = ({ playlist, index }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const [liked, setLiked] = useState(playlist.liked);

//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.9 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ delay: index * 0.1 }}
//       whileHover={{ y: -8 }}
//       onHoverStart={() => setIsHovered(true)}
//       onHoverEnd={() => setIsHovered(false)}
//       className="relative flex-shrink-0 w-64 cursor-pointer"
//     >
//       <div className="relative aspect-square rounded-2xl overflow-hidden">
//         <img src={playlist.image} alt={playlist.title} className="w-full h-full object-cover" />
        
//         {/* Gradient Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

//         {/* Play Button */}
//         <motion.button
//           initial={{ scale: 0, opacity: 0 }}
//           animate={{ 
//             scale: isHovered ? 1 : 0,
//             opacity: isHovered ? 1 : 0
//           }}
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//           className="absolute bottom-4 right-4 w-14 h-14 bg-[#16FF6E] rounded-full flex items-center justify-center shadow-2xl"
//         >
//           <Play className="w-6 h-6 text-[#1B1B1B] ml-1" fill="currentColor" />
//         </motion.button>

//         {/* Infos */}
//         <div className="absolute bottom-0 left-0 right-0 p-4">
//           <h3 className="font-bold text-lg mb-1">{playlist.title}</h3>
//           <p className="text-xs text-white/80">{playlist.description}</p>
//           <p className="text-xs text-white/60 mt-2">{playlist.tracks} titres</p>
//         </div>

//         {/* Heart Icon */}
//         <motion.button
//           whileHover={{ scale: 1.2 }}
//           whileTap={{ scale: 0.9 }}
//           onClick={(e) => {
//             e.stopPropagation();
//             setLiked(!liked);
//           }}
//           className="absolute top-4 right-4 z-10"
//         >
//           <Heart 
//             className={`w-6 h-6 transition-colors ${liked ? 'fill-[#FF4BC3] text-[#FF4BC3]' : 'text-white'}`}
//           />
//         </motion.button>
//       </div>
//     </motion.div>
//   );
// };

// // ==================== COMPOSANT: DAILY MIX CARD ====================
// const DailyMixCard = ({ mix, index }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.9 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ delay: index * 0.1 }}
//       whileHover={{ y: -8 }}
//       onHoverStart={() => setIsHovered(true)}
//       onHoverEnd={() => setIsHovered(false)}
//       className="relative flex-shrink-0 w-56 cursor-pointer"
//     >
//       <div className="relative aspect-square rounded-2xl overflow-hidden" style={{ backgroundColor: mix.color + '20' }}>
//         <img src={mix.image} alt={mix.name} className="w-full h-full object-cover mix-blend-overlay" />
        
//         <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/60" />

//         {/* Badge */}
//         <div className="absolute top-3 left-3 px-3 py-1 bg-white/90 text-[#1B1B1B] text-xs font-bold rounded-full backdrop-blur-sm">
//           Mix
//         </div>

//         {/* Play Button */}
//         <motion.button
//           animate={{ 
//             scale: isHovered ? 1 : 0,
//             opacity: isHovered ? 1 : 0
//           }}
//           whileHover={{ scale: 1.1 }}
//           className="absolute bottom-3 right-3 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-2xl"
//         >
//           <Play className="w-5 h-5 text-[#1B1B1B] ml-1" fill="currentColor" />
//         </motion.button>

//         {/* Info */}
//         <div className="absolute bottom-0 left-0 right-0 p-4">
//           <h3 className="font-bold text-sm">{mix.name}</h3>
//           <p className="text-xs text-white/80 mt-1">{mix.genres.join(', ')}</p>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// // ==================== COMPOSANT: ARTIST CARD ====================
// const ArtistCard = ({ artist, index }) => (
//   <motion.div
//     initial={{ opacity: 0, scale: 0.8 }}
//     animate={{ opacity: 1, scale: 1 }}
//     transition={{ delay: index * 0.1 }}
//     whileHover={{ scale: 1.05 }}
//     className="flex-shrink-0 text-center cursor-pointer relative"
//   >
//     <motion.div 
//       whileHover={{ y: -5 }}
//       className="relative w-32 h-32 mx-auto"
//     >
//       <div className="w-full h-full rounded-full overflow-hidden ring-4 ring-[#A00097]/30">
//         <img src={artist.image} alt={artist.name} className="w-full h-full object-cover" />
//       </div>
      
//       {artist.newRelease && (
//         <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#16FF6E] rounded-full flex items-center justify-center border-2 border-[#1B1B1B]">
//           <span className="text-xs font-bold text-[#1B1B1B]">!</span>
//         </div>
//       )}

//       <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-10 h-10 bg-[#16FF6E] rounded-full flex items-center justify-center border-4 border-[#1B1B1B]">
//         <Play className="w-5 h-5 text-[#1B1B1B] ml-0.5" fill="currentColor" />
//       </div>
//     </motion.div>
//     <h3 className="font-semibold text-sm mt-4">{artist.name}</h3>
//     {artist.newRelease && (
//       <p className="text-xs text-[#16FF6E] mt-1">Nouvelle sortie</p>
//     )}
//   </motion.div>
// );

// // ==================== COMPOSANT: NEW RELEASE CARD ====================
// const NewReleaseCard = ({ release, index }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: index * 0.1 }}
//       whileHover={{ y: -5 }}
//       onHoverStart={() => setIsHovered(true)}
//       onHoverEnd={() => setIsHovered(false)}
//       className="cursor-pointer"
//     >
//       <div className="relative aspect-square rounded-xl overflow-hidden">
//         <img src={release.image} alt={release.title} className="w-full h-full object-cover" />
        
//         <motion.div
//           className={`absolute top-3 left-3 px-3 py-1 text-white text-xs font-bold rounded-full ${
//             release.type === 'Album' ? 'bg-[#FF4BC3]' : 
//             release.type === 'Single' ? 'bg-[#16FF6E] text-[#1B1B1B]' : 
//             'bg-[#C05CFF]'
//           }`}
//         >
//           {release.type}
//         </motion.div>

//         <motion.button
//           animate={{ 
//             scale: isHovered ? 1 : 0,
//             opacity: isHovered ? 1 : 0
//           }}
//           className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center"
//         >
//           <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
//             <Play className="w-7 h-7 text-[#1B1B1B] ml-1" fill="currentColor" />
//           </div>
//         </motion.button>

//         <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
//       </div>
      
//       <div className="mt-3">
//         <h3 className="font-semibold text-sm truncate">{release.title}</h3>
//         <p className="text-xs text-white/60 truncate">{release.artist}</p>
//         <p className="text-xs text-[#16FF6E] mt-1">{release.date}</p>
//       </div>
//     </motion.div>
//   );
// };

// // ==================== COMPOSANT: CONTINUE LISTENING CARD ====================
// const ContinueCard = ({ item, index }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, x: -20 }}
//       animate={{ opacity: 1, x: 0 }}
//       transition={{ delay: index * 0.1 }}
//       whileHover={{ y: -5 }}
//       className="flex-shrink-0 w-80 bg-white/5 hover:bg-white/10 rounded-2xl p-4 cursor-pointer transition-all"
//     >
//       <div className="flex items-center gap-4 mb-4">
//         <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
//           <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
//         </div>
//         <div className="flex-1 min-w-0">
//           <h3 className="font-semibold text-sm truncate">{item.title}</h3>
//           <p className="text-xs text-white/60 mt-1">{item.currentTrack}</p>
//         </div>
//         <motion.button
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//           className="w-10 h-10 bg-[#16FF6E] rounded-full flex items-center justify-center flex-shrink-0"
//         >
//           <Play className="w-5 h-5 text-[#1B1B1B] ml-0.5" fill="currentColor" />
//         </motion.button>
//       </div>

//       {/* Progress Bar */}
//       <div className="space-y-2">
//         <div className="flex justify-between text-xs text-white/50">
//           <span>{item.progress}% écouté</span>
//         </div>
//         <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
//           <motion.div 
//             initial={{ width: 0 }}
//             animate={{ width: `${item.progress}%` }}
//             transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
//             className="h-full bg-[#16FF6E] rounded-full"
//           />
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// ==================== PAGE PRINCIPALE ====================
const MediatikHome = () => {
  const {isOpen, close, toggle} = useSidebar()

  return (
    <div className="flex h-screen bg-[#1B1B1B] text-white overflow-hidden">
      {/* SIDEBAR */}
      <Aside isOpen={isOpen} close={close} />

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* HEADER */}
        <Header menuCliquer={toggle} />

        {/* SCROLLABLE CONTENT */}
        <div className="flex-1 overflow-y-auto px-4 lg:px-8 py-6 space-y-8">
          {/* Section: Récemment écouté */}
          <Section titre="Récemment écouté" action="Tout voir">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {recentlyPlayed.slice(0, 6).map((song, index) => (
                <RecentCard key={song.id} song={song} index={index} />
              ))}
            </div>
          </Section>

          {/* Section: Continuer l'écoute */}
          <Section titre="Continuer l'écoute" subtitre="Reprenez là où vous vous êtes arrêté">
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
              {continueListening.map((item, index) => (
                <ContinueCard key={item.id} item={item} index={index} />
              ))}
            </div>
          </Section>

          {/* Section: Playlists recommandées */}
          <Section titre="Créées pour vous" subtitre="Vos playlists personnalisées" action="Voir plus">
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
              {recommendedPlaylists.map((playlist, index) => (
                <PlaylistCard key={playlist.id} playlist={playlist} index={index} />
              ))}
            </div>
          </Section>

          {/* Section: Mix quotidiens */}
          <Section titre="Vos mix quotidiens" subtitre="Un mix unique pour chaque humeur">
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
              {dailyMixes.map((mix, index) => (
                <DailyMixCard key={mix.id} mix={mix} index={index} />
              ))}
            </div>
          </Section>

          {/* Section: Vos artistes favoris */}
          <Section titre="Vos artistes favoris" action="Tout voir">
            <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
              {favoriteArtists.map((artist, index) => (
                <ArtistCard key={artist.id} artist={artist} index={index} />
              ))}
            </div>
          </Section>

          {/* Section: Nouveautés pour vous */}
          <Section titre="Nouveautés pour vous" subtitre="Basé sur vos écoutes récentes" action="Voir plus">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {newReleases.map((release, index) => (
                <NewReleaseCard key={release.id} release={release} index={index} />
              ))}
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
};

export default MediatikHome;