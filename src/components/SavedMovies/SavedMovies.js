import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import { useState, useEffect } from "react";
import { searchMovies } from "../../utils/search";

function SavedMovies({ savedMovies }) {
  const [movies, setMovies] = useState([]);
  const [valueOfSearch, setValueOfSearch] = useState({
    keyWord: "",
    isShort: false,
  });

  useEffect(() => {
    setMovies(searchMovies(savedMovies, valueOfSearch));
  }, [valueOfSearch, savedMovies]);

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
        isMoviesLoaded={true}
        isFirstSearch={false}
        needMoreButton={false}
        savedButtonClass="delete"
      />
    </main>
  );
}

export default SavedMovies;
