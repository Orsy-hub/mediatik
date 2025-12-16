"use client"
import Image from "next/image";
import Player from "./lecture";
import App from "./lecture2";
import NowPlayingPage from "./NowPlaying";
import SearchPage from "./SearchPage";
import HomePage from "./HomePage";
import HomePages from "./Mofication avec animation/HomePage";
import NowPlayingPages from "./Mofication avec animation/NowPlaying";
import ProfilePage from "./Mofication avec animation/ProfilePage";
import SearchPages from "./Mofication avec animation/SearchPage";
import AlbumDetailPage from "./album/[id]/page";
import PlaylistDetailPage from "./playlist/[id]/page";
import LibraryPage from "./library/page";
import ArtistPage from "./artist/[id]/page";
import PodcastPage from "./podcast/[id]/page";
import SettingsPage from "./settings/page";
import HomePag from "./homePag";
import useNavigation from "@/lib/context/NavigationContext";
import { MediatikHomePage } from "./pages/AccueilPage/page";
import { MediatkDiscovery } from "./pages/decouverte/page";
import { MediatikChart } from "./pages/charts/page";

export default function MediatikApp() {
  const {currentPage} = useNavigation()

  // Rendu conditionnel basé sur la page active
  const renduDeLaPage = () => {
    switch (currentPage) {
      case 'accueil':
        return <MediatikHomePage />
      case 'decouverte':
        return <MediatkDiscovery />
      case 'charts':
          return <MediatikChart />
    }
  }

  return (
    <div className="flex-1">
      {/* <Player /> */}
      {/* <NowPlayingPage /> */}
      {/* <HomePage /> */}
      {/* <HomePag /> */}
      {/* <App /> */}
      {/* <SearchPage /> */}
      {/* <ArtistPage /> */}
      {/* <PodcastPage /> */}
      {/* <SettingsPage /> */}
      {renduDeLaPage()}
      {/* Modification */}
      {/* <HomePages /> */}
      {/* <NowPlayingPages /> */}
      {/* <ProfilePage /> */}
      {/* <SearchPages /> */}
      {/* <AlbumDetailPage /> */}
      {/* <LibraryPage /> */}
      {/* <PlaylistDetailPage /> */}
    </div>
  );
}
