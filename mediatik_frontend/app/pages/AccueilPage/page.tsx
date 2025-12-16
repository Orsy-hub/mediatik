import { ArtistCard } from "@/components/cards/ArtistCard";
import { ContinueCard } from "@/components/cards/ContinuueCard";
import { DailyMixCard } from "@/components/cards/DailyMixCard";
import { NewReleaseCard } from "@/components/cards/NewReleaseCard";
import { PlaylistCard } from "@/components/cards/PlaylistCard";
import { RecentCard } from "@/components/cards/RecentCard";
import { Section } from "@/components/Section";
import { continueListening, dailyMixes, favoriteArtists, newReleases, recentlyPlayed, recommendedPlaylists } from "@/lib/data";



export const MediatikHomePage = () => {
    return (
        <div className="flex h-screen bg-[#1B1B1B] text-white overflow-hidden">

          <div className="flex-1 overflow-y-auto px-4 lg:px-8 py-6 space-y-8">

            {/* Section Récemment écouté */}
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
    );
}