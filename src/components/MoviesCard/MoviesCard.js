import "./MoviesCard.css";

function MoviesCard({ title, time, image, nameOfButton, textOfButton }) {
  return (
    <arcticle className="movie-card">
      <h2 className="movie-card__name">{title}</h2>
      <span className="movie-card__time">{time}</span>
      <img className="movie-card__image" src={image} alt={title}/>
      <button className={`movie-card__button movie-card__button_type_${nameOfButton}`}>{textOfButton ? textOfButton : ''}</button>
    </arcticle>
  );
}

export default MoviesCard;
