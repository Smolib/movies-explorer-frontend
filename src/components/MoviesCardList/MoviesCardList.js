import "./MoviesCardList.css";
import MovieCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import { useState, useEffect, useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { mainApi } from "../../utils/MainApi";

function MoviesCardList({
  movies,
  isMoviesLoaded,
  isFirstSearch,
  needMoreButton,
  savedButtonClass,
}) {

  const { savedMovies, setSavedMovies } = useContext(CurrentUserContext);

  const [widthOfWindow, setWidthOfWindow] = useState(window.innerWidth);
  const handleResizeWindow = () => {
    setWidthOfWindow(window.innerWidth);
  };
  const [countOfMovies, setCountOfMovies] = useState(36);
  const [moviesForView, setMoviesForView] = useState([]);
  const [isMoreMovies, setIsMoreMovies] = useState(true);

  useEffect(() => {
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  useEffect(() => {
    if (widthOfWindow >= 1040) {
      return setCountOfMovies(12);
    }
    if (widthOfWindow > 643 && widthOfWindow < 1040) {
      return setCountOfMovies(8);
    }
    if (widthOfWindow <= 643) {
      return setCountOfMovies(5);
    }
  }, [widthOfWindow]);

  useEffect(() => {
    if (!needMoreButton) {
      setMoviesForView(movies);
    } else {
      setMoviesForView(movies.slice(0, countOfMovies));
    }
  }, [countOfMovies, movies]);

  useEffect(() => {
    if (countOfMovies >= movies.length) {
      setIsMoreMovies(false);
    } else {
      setIsMoreMovies(true);
    }
  }, [countOfMovies, movies]);

  const handleMoreButtonClick = () => {
    if (countOfMovies < movies.length) {
      if (widthOfWindow > 1040) {
        return setCountOfMovies(countOfMovies + 3);
      }
      if (widthOfWindow <= 1040) {
        return setCountOfMovies(countOfMovies + 2);
      }
    } else {
      setIsMoreMovies(false);
    }
  };

  const checkIsSaved = (movie) => {
    const isSaved = savedMovies.some((item) => {
      return item.movieId === movie.movieId;
    });
    return isSaved;
  };

  const handleOnClickMovieButton = (movie) => {
    if (checkIsSaved(movie)) {
      const savedMovie = savedMovies.find((item) => {
        return item.movieId === movie.movieId;
      });
      mainApi
        .deleteMovie(savedMovie)
        .then(() =>
          mainApi.getSavedMovies().then((data) => setSavedMovies(data))
        )
        .catch(() => {
          alert("Упс, мы не смогли удалить фильм из сохраненных");
        });
    } else {
      mainApi
        .postMovie(movie)
        .then((savedMovie) => setSavedMovies([...savedMovies, savedMovie]))
        .catch(() => {
          alert("Упс, мы не смогли добавить фильм в сохраненные");
        });
    }

    return;
  };

  return (
    <>
      <section className="movies-list">
        {isFirstSearch ? (
          <p className="movies-list__text">Здесь будут результаты поиска.</p>
        ) : isMoviesLoaded ? (
          movies.length !== 0 ? (
            moviesForView.map((movie) => {
              return (
                <MovieCard
                  key={movie.movieId}
                  title={movie.nameRU}
                  time={movie.duration}
                  imageUrl={movie.image}
                  trailerLink={movie.trailerLink}
                  nameOfButton={
                    checkIsSaved(movie) ? savedButtonClass : "save"
                  }
                  textOfButton={checkIsSaved(movie) ? "" : "Сохранить"}
                  onClick={() => handleOnClickMovieButton(movie)}
                />
              );
            })
          ) : (
            <p className="movies-list__text">Фильмы не найдены.</p>
          )
        ) : (
          <Preloader />
        )}
        {needMoreButton && isMoreMovies && !isFirstSearch ? (
          <div className="movies-list__more-container">
            <button
              className="movies-list__more-button"
              type="button"
              onClick={handleMoreButtonClick}
            >
              Ещё
            </button>
          </div>
        ) : (
          ""
        )}
      </section>
    </>
  );
}

export default MoviesCardList;
