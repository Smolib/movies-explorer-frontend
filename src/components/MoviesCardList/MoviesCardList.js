import "./MoviesCardList.css";
import MovieCard from "../MoviesCard/MoviesCard";
import image1 from "../../images/movies/movie1.jpg";
import image2 from "../../images/movies/movie2.jpg";
import image3 from "../../images/movies/movie3.jpg";

function MoviesCardList({ needMoreButton }) {
  return (
    <>
      <section className="movies-list">
        <MovieCard
          title="В погоне за Бенкси"
          time="27 минут"
          image={image1}
          nameOfButton="saved"
        />
        <MovieCard
          title="В погоне за Кенкси"
          time="26 минут"
          image={image2}
          nameOfButton="saved"
        />
        <MovieCard
          title="В погоне за Венкси"
          time="25 минут"
          image={image3}
          nameOfButton="save"
          textOfButton="Сохранить"
        />
        <MovieCard
          title="В погоне за Бенкси"
          time="27 минут"
          image={image1}
          nameOfButton="saved"
        />
        <MovieCard
          title="В погоне за Кенкси"
          time="26 минут"
          image={image2}
          nameOfButton="save"
          textOfButton="Сохранить"
        />
        {needMoreButton ? (
          <div className="movies-list__more-container">
            <button className="movies-list__more-button" type="button">
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
