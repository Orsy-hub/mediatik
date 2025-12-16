
import { Home, Compass, TrendingUp, Library, Heart, Plus } from "lucide-react";
// ==================== DONNÉES STATIQUES ====================
const recentlyPlayed = [
  { id: 1, title: "Midnight Dreams", artist: "Luna Eclipse", image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400", time: "Il y a 2h", duration: "3:45" },
  { id: 2, title: "Summer Vibes", artist: "The Waves", image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400", time: "Il y a 5h", duration: "4:12" },
  { id: 3, title: "Electric Soul", artist: "Neon Lights", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400", time: "Hier", duration: "3:28" },
  { id: 4, title: "Ocean Breeze", artist: "Coastal Dreams", image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400", time: "Hier", duration: "5:01" },
  { id: 5, title: "Urban Nights", artist: "City Beats", image: "https://images.unsplash.com/photo-1487537708572-3c850b5e856a?w=400", time: "Il y a 3 jours", duration: "3:55" }
];

const recommendedPlaylists = [
  { id: 1, title: "Mix du matin", description: "Démarrez votre journée en douceur", image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400", tracks: 30, liked: true },
  { id: 2, title: "Concentration", description: "Musique pour rester focus", image: "https://images.unsplash.com/photo-1482443346718-281bbeb78c44?w=400", tracks: 45, liked: false },
  { id: 3, title: "Workout Energy", description: "Boostez vos entraînements", image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=400", tracks: 28, liked: true },
  { id: 4, title: "Chill Evening", description: "Détendez-vous après le travail", image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400", tracks: 35, liked: false }
];

const dailyMixes = [
  { id: 1, name: "Mix Quotidien 1", genres: ["Pop", "Electro"], image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400", color: "#FF4BC3" },
  { id: 2, name: "Mix Quotidien 2", genres: ["Rock", "Indie"], image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400", color: "#C05CFF" },
  { id: 3, name: "Mix Quotidien 3", genres: ["Jazz", "Soul"], image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400", color: "#16FF6E" },
  { id: 4, name: "Mix Quotidien 4", genres: ["Hip-Hop", "R&B"], image: "https://images.unsplash.com/photo-1487537708572-3c850b5e856a?w=400", color: "#A00097" }
];

const favoriteArtists = [
  { id: 1, name: "Billie Eilish", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200", followers: "89M", newRelease: true },
  { id: 2, name: "The Weeknd", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200", followers: "78M", newRelease: false },
  { id: 3, name: "Dua Lipa", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200", followers: "65M", newRelease: true },
  { id: 4, name: "Ariana Grande", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200", followers: "89M", newRelease: false },
  { id: 5, name: "Drake", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200", followers: "89M", newRelease: false }
];

const favoriteSongs = [
  { id: 1, titre: "Blinding Lights", artist: "The Weeknd", album: "After Hours", duration: "3:22", addedAt: "2024-01-15", image: "https://images.unsplash.com/photo-1482443346718-281bbeb78c44?w=400", liked: true },
  { id: 2, titre: "Levitating", artist: "Dua Lipa", album: "Future Nostalgia", duration: "3:23", addedAt: "2024-01-10", image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=400", liked: true },
  { id: 3, titre: "Happier Than Ever", artist: "Billie Eilish", album: "Happier Than Ever", duration: "4:58", addedAt: "2024-01-08", image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400", liked: true },
  { id: 4, titre: "Kiss Me More", artist: "Doja Cat", album: "Planet Her", duration: "3:28", addedAt: "2024-01-05", image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400", liked: true },
  { id: 5, titre: "As It Was", artist: "Harry Styles", album: "Harry's House", duration: "2:47", addedAt: "2024-01-03", image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400", liked: true },
  { id: 6, titre: "Anti-Hero", artist: "Taylor Swift", album: "Midnights", duration: "3:20", addedAt: "2023-12-28", image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400", liked: true }
];

const favoriteAlbums = [
  { id: 1, title: "After Hours", artist: "The Weeknd", year: "2020", image: "https://images.unsplash.com/photo-1482443346718-281bbeb78c44?w=400", tracks: 14, liked: true },
  { id: 2, title: "Future Nostalgia", artist: "Dua Lipa", year: "2020", image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=400", tracks: 11, liked: true },
  { id: 3, title: "Happier Than Ever", artist: "Billie Eilish", year: "2021", image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400", tracks: 16, liked: true },
  { id: 4, title: "Planet Her", artist: "Doja Cat", year: "2021", image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400", tracks: 14, liked: true }
];

const favoritePlaylists = [
  { id: 1, title: "Chill Vibes", creator: "Vous", tracks: 45, image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400", liked: true },
  { id: 2, title: "Workout Mix", creator: "Spotify", tracks: 32, image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400", liked: true },
  { id: 3, title: "Late Night Drive", creator: "Vous", tracks: 28, image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400", liked: true },
  { id: 4, title: "Summer Hits", creator: "Mediatik", tracks: 50, image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400", liked: true }
];

const newReleases = [
  { id: 1, title: "Cosmic Journey", artist: "Space Echo", type: "Album", image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400", date: "Aujourd'hui" },
  { id: 2, title: "Neon Dreams", artist: "Cyber Wave", type: "Single", image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400", date: "Hier" },
  { id: 3, title: "Sunset Boulevard", artist: "Retro Vibes", type: "Album", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400", date: "Il y a 2 jours" },
  { id: 4, title: "Thunder Storm", artist: "Electric Pulse", type: "EP", image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400", date: "Il y a 3 jours" }
];

const continueListening = [
  { id: 1, title: "Your Library Mix", progress: 65, image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400", currentTrack: "Track 12/18" },
  { id: 2, title: "Discover Weekly", progress: 30, image: "https://images.unsplash.com/photo-1482443346718-281bbeb78c44?w=400", currentTrack: "Track 5/30" },
  { id: 3, title: "Release Radar", progress: 80, image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=400", currentTrack: "Track 24/30" }
];



const menuItems = [
  { id: 'accueil', icon: Home, label: "Accueil", page: 'accueil' as const },
  { id: 'decouverte', icon: Compass, label: "Découverte", page: 'decouverte' as const },
  { id: 'charts', icon: TrendingUp, label: "Top Charts", page: 'charts' as const },
  { id: 'library', icon: Library, label: "Ma Bibliothèque", page: 'library' as const },
  { id: 'favoris', icon: Heart, label: "Favoris", page: 'favoris' as const },
  { id: 'creer', icon: Plus, label: "Créer Playlist", page: 'creer' as const }
];

// Configuration des titres par page
export const pageHeaders = {
  accueil: {
    avoirTitre: () => {
      const hour = new Date().getHours();
      return hour < 12 ? "Bonjour" : hour < 18 ? "Bon après-midi" : "Bonsoir";
    },
    subtitle: "Prêt à découvrir de nouveaux sons ?"
  },
  decouverte: {
    avoirTitre: () => "Découverte",
    subtitle: "Explorez de nouveaux horizons musicaux"
  },
  charts: {
    avoirTitre: () => "Top Charts",
    subtitle: "Ce qui cartonne en ce moment"
  },
  library: {
    avoirTitre: () => "Ma Bibliothèque",
    subtitle: "Gérez votre collection musicale"
  },
  favoris: {
    avoirTitre: () => "Mes Favoris",
    subtitle: "Vos morceaux préférés en un seul endroit"
  },
  creer: {
    avoirTitre: () => "Créer une Playlist",
    subtitle: "Créez votre propre sélection musicale"
  }
};

const trendingSongs = [
  { id: 1, title: "God Boy", artist: "Billie Eilish", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400", plays: "2.5M" },
  { id: 2, title: "Blinding Lights", artist: "The Weeknd", image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400", plays: "3.2M" },
  { id: 3, title: "Worship", artist: "Dua Lipa", image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400", plays: "2.8M" },
  { id: 4, title: "Save Your Tears", artist: "Ariana Grande", image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400", plays: "1.9M" },
  { id: 5, title: "God is Good 4 U", artist: "Olivia Rodrigo", image: "https://images.unsplash.com/photo-1487537708572-3c850b5e856a?w=400", plays: "2.1M" }
];
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

const topAlbums = [
  { id: 1, titre: "Happier Than Ever", artist: "Billie Eilish", image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400", annee: "2024", streams:"1.2B", rank:1 },
  { id: 2, titre: "After Hours", artist: "The Weeknd", image: "https://images.unsplash.com/photo-1482443346718-281bbeb78c44?w=400", annee: "2024", streams:"12M", rank:11 },
  { id: 3, titre: "Future Nostalgia", artist: "Dua Lipa", image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=400", annee: "2023", streams:"138M", rank:3 },
  { id: 4, titre: "Positions", artist: "Ariana Grande", image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400", annee: "2023", streams:"732M", rank:6 }
];

const viralTracks = [
  { id: 1, title: "Cupid", artist: "FIFTY FIFTY", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400", viralScore: 98, platform: "TikTok" },
  { id: 2, title: "Paint The Town Red", artist: "Doja Cat", image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400", viralScore: 95, platform: "Instagram" },
  { id: 3, title: "greedy", artist: "Tate McRae", image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=400", viralScore: 92, platform: "TikTok" },
  { id: 4, title: "Snooze", artist: "SZA", image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400", viralScore: 89, platform: "Twitter" }
];

const topArtists = [
  { id: 1, name: "Billie Eilish", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200", followers: "89M", streams:"12M", rank: 1, genre: "Pop" },
  { id: 2, name: "The Weeknd", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200", followers: "78M", streams:"12M", rank: 9, genre: "R&B" },
  { id: 3, name: "Dua Lipa", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200", followers: "65M", streams:"12M", rank: 4, genre: "Hip-Hop" },
  { id: 4, name: "Ariana Grande", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200", followers: "92M", streams:"12M", rank: 7, genre: "Reggaeton" },
  { id: 5, name: "Drake", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200", followers: "71M", streams: "22B", rank: 8, genre: "Soul" }
];

const newTalents = [
  { id: 1, name: "Luna Moon", image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=300", genre: "Pop" },
  { id: 2, name: "Jazz Rivera", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300", genre: "R&B" },
  { id: 3, name: "Nova Star", image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=300", genre: "Electro" },
  { id: 4, name: "Echo Wave", image: "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=300", genre: "Indie" },
  { id: 5, name: "Phoenix Rise", image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=300", genre: "Rock" },
  { id: 6, name: "Sky Dreams", image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=300", genre: "Dream Pop" }
];


export { recentlyPlayed, recommendedPlaylists, dailyMixes, favoriteArtists, favoriteSongs,favoriteAlbums,favoritePlaylists, newReleases, continueListening, trendingSongs,globalTop50,viralTracks, topAlbums, topArtists, newTalents, menuItems };