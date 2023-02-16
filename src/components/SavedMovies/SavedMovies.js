import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import { useState, useEffect, useContext } from "react";
import { searchMovies } from "../../utils/search";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function SavedMovies({isSavedMoviesLoaded}) {

  const { savedMovies } = useContext(CurrentUserContext);

  const [isMoviesLoaded, setIsMoviesLoaded] = useState(false);
  const [movies, setMovies] = useState([]);
  const [valueOfSearch, setValueOfSearch] = useState({
    keyWord: '',
    isShort: false,
  });

  useEffect(() => {
    if(isSavedMoviesLoaded) {
      setMovies(searchMovies(savedMovies, valueOfSearch));
      setIsMoviesLoaded(true)
    }
  }, [valueOfSearch, savedMovies]);

  function handleSubmitSearch(keyWord) {
    setValueOfSearch({ ...valueOfSearch, keyWord: keyWord });
  }

  function handleCheckbox(checked) {
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
        isMoviesLoaded={isMoviesLoaded}
        isFirstSearch={false}
        needMoreButton={false}
        savedButtonClass="delete"
      />
    </main>
  );
}

export default SavedMovies;
