import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useState, useEffect } from "react";
import { moviesApi } from "../../utils/MoviesApi";
import { searchMovies } from "../../utils/search";

function Movies({ savedMovies }) {
  const [allMovies, setAllMovies] = useState([]);
  const [movies, setMovies] = useState([]);
  const [isMoviesLoaded, setIsMoviesLoaded] = useState(false);
  const [valueOfSearch, setValueOfSearch] = useState({
    keyWord: "",
    isShort: false,
  });
  const [isFirstSearch, setIsFirstSearch] = useState(true);
  useEffect(() => {
    if (!isFirstSearch) {
      setMovies(searchMovies(allMovies, valueOfSearch));
    }
  }, [valueOfSearch, allMovies]);

  function handleSubmitSearch(keyWord) {
    if (isFirstSearch) {
      setIsFirstSearch(false);
      moviesApi
        .getMovies()
        .then((data) => {
          const movies = data.map((movie) => {
            return {
              country: movie.country,
              director: movie.director,
              duration: movie.duration,
              year: movie.year,
              description: movie.description,
              image: `https://api.nomoreparties.co${movie.image.url}`,
              trailerLink: movie.trailerLink,
              thumbnail: `https://api.nomoreparties.co${movie.image.url}`,
              movieId: movie.id,
              nameRU: movie.nameRU,
              nameEN: movie.nameEN,
            };
          });
          setAllMovies(movies);
          setIsMoviesLoaded(true);
          setValueOfSearch({ ...valueOfSearch, keyWord: keyWord });
        })
    } else {
      setValueOfSearch({ ...valueOfSearch, keyWord: keyWord });
    }
  }

  function handleCheckbox() {
    setValueOfSearch({ ...valueOfSearch, isShort: !valueOfSearch.isShort });
  }

  return (
    <main>
      <SearchForm
        handleSubmitSearch={handleSubmitSearch}
        handleCheckbox={handleCheckbox}
      />
      <MoviesCardList
        movies={movies}
        isMoviesLoaded={isMoviesLoaded}
        isFirstSearch={isFirstSearch}
        needMoreButton={true}
        savedMovies={savedMovies}
        savedButtonClass="saved"
      />
    </main>
  );
}

export default Movies;
