import React, { useState, useEffect } from "react";
import { dummyShowData } from "../assets/assets";
import MovieCard from "../components/MovieCard";
import BlurCircle from "../components/BlurCircle";

const Favorite = () => {
  const [favorites, setFavorites] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");

  useEffect(() => {
    const favIds = JSON.parse(localStorage.getItem("favorites") || "[]");
    const favMovies = dummyShowData.filter((movie) => favIds.includes(movie._id));
    setFavorites(favMovies);
  }, []);

  // Get unique genres
  const genres = [
    "All",
    ...new Set(favorites.flatMap((movie) => movie.genres.map((g) => g.name))),
  ];

  const filteredMovies = favorites.filter((movie) => {
    const matchesSearch = movie.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = selectedGenre === "All" || movie.genres.some((g) => g.name === selectedGenre);
    return matchesSearch && matchesGenre;
  });

  return (
    <div className="relative my-40 mb-60 px-6 md:px-16 lg:px-40 xl:px-44 overflow-hidden min-h-[80vh]">
      <BlurCircle top="150px" left="0px" />
      <BlurCircle bottom="50px" right="50px" />

      <h1 className="text-lg font-medium my-4">Your Favorite Movies</h1>

      
    

      {/* Movie Grid */}
      {filteredMovies.length > 0 ? (
        <div className="flex flex-wrap max-sm:justify-center gap-8">
          {filteredMovies.map((movie) => (
            <MovieCard key={movie._id} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-64">
          <h1 className="text-2xl font-semibold text-center">No Favorites Found</h1>
        </div>
      )}
    </div>
  );
};

export default Favorite;
