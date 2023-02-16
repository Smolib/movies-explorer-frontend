import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useState, useEffect, useContext } from "react";
import { moviesApi } from "../../utils/MoviesApi";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { searchMovies } from "../../utils/search";

function Movies() {
  
  const { savedMovies } = useContext(CurrentUserContext);

  const _isShort =
    localStorage.getItem("moviesSearchIsShort") === "true" || false;
  const _keyWord = localStorage.getItem("moviesSearchKeyWord") || "";
  const _hadSearch = localStorage.getItem("moviesSearchKeyWord") !== null;

  const [allMovies, setAllMovies] = useState([]);
  const [movies, setMovies] = useState([]);
  const [isMoviesLoaded, setIsMoviesLoaded] = useState(false);
  const [valueOfSearch, setValueOfSearch] = useState({
    keyWord: _keyWord,
    isShort: _isShort,
  });
  const [isFirstSearch, setIsFirstSearch] = useState(!_hadSearch);

  useEffect(() => {
    if (_hadSearch) {
      loadMovies();
    }
  }, []);

  useEffect(() => {
    setMovies(searchMovies(allMovies, valueOfSearch));
  }, [valueOfSearch, allMovies]);

  function loadMovies() {
    if (isMoviesLoaded) return;

    moviesApi.getMovies().then((data) => {
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
    });
  }

  function handleSubmitSearch(keyWord) {
    setIsFirstSearch(false);

    loadMovies();
    localStorage.setItem("moviesSearchKeyWord", keyWord);
    setValueOfSearch({ ...valueOfSearch, keyWord: keyWord });
  }

  function handleCheckbox(checked) {
    localStorage.setItem("moviesSearchIsShort", `${checked}`);
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
        isFirstSearch={isFirstSearch}
        needMoreButton={true}
        savedMovies={savedMovies}
        savedButtonClass="saved"
      />
    </main>
  );
}

export default Movies;
