import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import { useState, useEffect } from "react";
import { mainApi } from "../../utils/MainApi";
import { searchMovies } from "../../utils/search";

function SavedMovies() {
  const [allMovies, setAllMovies] = useState([]);
  const [movies, setMovies] = useState([]);
  const [isMoviesLoaded, setIsMoviesLoaded] = useState(false);
  const [valueOfSearch, setValueOfSearch] = useState({
    keyWord: "",
    isShort: false,
  });

  useEffect(() => {
    mainApi.getSavedMovies().then((data) => {
      setAllMovies(data);
      setIsMoviesLoaded(true);
    });
  }, []);

  useEffect(() => {
    setMovies(searchMovies(allMovies, valueOfSearch));
  }, [valueOfSearch, allMovies]);

  function handleSubmitSearch(keyWord) {
    setValueOfSearch({ ...valueOfSearch, keyWord: keyWord });
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
        isFirstSearch={false}
        needMoreButton={false}
      />
    </main>
  );
}

export default SavedMovies;
