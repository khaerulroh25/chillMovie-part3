import { addMovie } from "../../services/api/movieApi";
import Navbar from "../components/organisms/Navbar";
import HeroSection from "../components/organisms/HeroSection";
import ContinueWatchingSection from "../components/organisms/ContinueWatchingSection";
import TopRatingSection from "../components/organisms/TopRatingSection";
import TopTrandingSection from "../components/organisms/TopTrandingSection";
import TopRilisSection from "../components/organisms/TopRilisSection";
import Footer from "../components/organisms/Footer";
type Movie = {
  id: string;
  poster: string;
};

export default function HomePage() {
  const handleAddToMyList = async (movie: Movie): Promise<string> => {
    const newMovie = await addMovie({
      title: "Top Rating Movie",
      poster: movie.poster,
      watched: false,
    });
    return newMovie.id;
  };
  return (
    <div className="bg-black text-white font-sans md:w-[1440px] md:h-[2890px]">
      <Navbar />
      <HeroSection />
      <ContinueWatchingSection />
      <TopRatingSection onAddToMyList={handleAddToMyList} />
      <TopTrandingSection onAddToMyList={handleAddToMyList} />
      <TopRilisSection onAddToMyList={handleAddToMyList} />
      <Footer />
    </div>
  );
}
