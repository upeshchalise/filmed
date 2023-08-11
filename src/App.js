import { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import Movie from "./Movie";

const url = "http://www.omdbapi.com?apikey=332c1ee3";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchFilm, setSearchFilm] = useState("");

  const searchMovie = async (title) => {
    const response = await fetch(`${url}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
    // console.log(data.Search);
  };
  // searchMovie();

  useEffect(() => {
    searchMovie();
  }, []);

  return (
    <div className="flex flex-col items-center m-4">
      <h1 className="text-4xl mb-4 text-yellow-600">filmy land</h1>
      <div className="flex relative mb-6">
        <input
          type="text"
          placeholder="search your movie here"
          value={searchFilm}
          onChange={(e) => {
            setSearchFilm(e.target.value);
          }}
          className="border w-80 bg-gray-900 hover:bg-gray-800 focus:bg-gray-800 text-yellow-600 rounded border-none p-2"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => {
            searchMovie(searchFilm);

            setSearchFilm("");
          }}
          className="w-6 absolute right-1 top-2 cursor-pointer text-yellow-500"
        />
      </div>

      {movies?.length > 0 ? (
        <section className="flex justify-center flex-wrap gap-6">
          {movies.map((movie) => (
            <Movie movie={movie} />
          ))}
        </section>
      ) : (
        <h1 className="text-3xl font-semibold text-gray-400">
          No movies Found
        </h1>
      )}
    </div>
  );
}

export default App;
