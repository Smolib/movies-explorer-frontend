import "./MoviesCardList.css";
import MovieCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import {useState, useEffect} from 'react'

function MoviesCardList({ movies, isMoviesLoaded, needMoreButton }) {
  const [widthOfWindow, setWidthOfWindow] = useState(window.innerWidth);
  const handleResizeWindow = () => {
    setWidthOfWindow(window.innerWidth)
  };
  const [countOfMovies, setCountOfMovies] = useState(36);
  const [moviesForView, setMoviesForView] = useState([])
  const [isMoreMovies, setIsMoreMovies] = useState(true);

  useEffect(() => {
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, [])

  useEffect(() => {
    if (widthOfWindow >= 1040) {
      return setCountOfMovies(12);
    };
    if (widthOfWindow > 643 &&  widthOfWindow < 1040) {
      return setCountOfMovies(8);
    };
    if (widthOfWindow <= 643) {
      return setCountOfMovies(5);
    };
  }, [widthOfWindow]);

  useEffect(() => {
    if(!needMoreButton) {
      setMoviesForView(movies);
    } else {
      setMoviesForView(movies.slice(0, countOfMovies))
    }
  }, [countOfMovies, movies])

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
      };
      if (widthOfWindow <= 1040) {
        return setCountOfMovies(countOfMovies + 2);
      };
    } else {
      setIsMoreMovies(false);
    }
  };

  return (
    <>
    {console.log(countOfMovies)}
      <section className="movies-list">
        { isMoviesLoaded ? movies.length !== 0 ?
           (
            moviesForView.map((movie) => {
            return (
              <MovieCard
                key={movie.id}
                title={movie.nameRU}
                time={movie.duration}
                imageUrl={movie.image.url}
                nameOfButton="saved"
              />
            );
          })
        ) : (
          ''
        ) : <Preloader />}
        {needMoreButton && isMoreMovies ? (
          <div className="movies-list__more-container">
            <button className="movies-list__more-button" type="button" onClick={handleMoreButtonClick}>
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
