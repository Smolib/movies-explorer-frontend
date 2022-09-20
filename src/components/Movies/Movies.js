import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useState, useEffect } from "react";
import { moviesApi } from "../../utils/MoviesApi";
import { searchMovies } from "../../utils/search";

function Movies() {
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
    setIsFirstSearch(false);
    moviesApi
      .getMovies()
      .then((data) => {
        setAllMovies(data);
        setIsMoviesLoaded(true);
      })
      .then(() => setValueOfSearch({ ...valueOfSearch, keyWord: keyWord }));
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
      />
    </main>
  );
}

export default Movies;
