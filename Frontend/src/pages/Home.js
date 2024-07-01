import ArtistSection from "../components/ArtistSection";
import AlbumSection from "../components/AlbumSection";

export default function Home({ setSelectedSongs, data }) {
  return (
    <>
      <ArtistSection />
      <AlbumSection setSelectedSongs={setSelectedSongs} data={data}/>
    </>
  );
}
