import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import { useState, useEffect } from "react";
import { searchMovies } from "../../utils/search";

function SavedMovies({ savedMovies }) {
  const _isShort =
    localStorage.getItem("savedMoviesSearchIsShort") === "true" || false;
  const _keyWord = localStorage.getItem("savedMoviesSearchKeyWord") || "";

  const [movies, setMovies] = useState([]);
  const [valueOfSearch, setValueOfSearch] = useState({
    keyWord: _keyWord,
    isShort: _isShort,
  });

  useEffect(() => {
    setMovies(searchMovies(savedMovies, valueOfSearch));
  }, [valueOfSearch, savedMovies]);

  function handleSubmitSearch(keyWord) {
    localStorage.setItem("savedMoviesSearchKeyWord", keyWord);
    setValueOfSearch({ ...valueOfSearch, keyWord: keyWord });
  }

  function handleCheckbox(checked) {
    localStorage.setItem("savedMoviesSearchIsShort", `${checked}`);
    setValueOfSearch({ ...valueOfSearch, isShort: checked });
  }

  return (
    <main>
      <SearchForm
        handleSubmitSearch={handleSubmitSearch}
        handleCheckbox={handleCheckbox}
        isShort={valueOfSearch.isShort}
        searchString={valueOfSearch.keyWord}
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
