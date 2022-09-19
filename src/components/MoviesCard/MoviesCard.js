import "./MoviesCard.css";

function MoviesCard({ title, time, imageUrl, nameOfButton, textOfButton }) {
  return (
    <article className="movie-card">
      <h2 className="movie-card__name">{title}</h2>
      <span className="movie-card__time">{time}</span>
      <img className="movie-card__image" src={`https://api.nomoreparties.co${imageUrl}`} alt={title} />
      <button
        type="button"
        className={`movie-card__button movie-card__button_type_${nameOfButton}`}
      >
        {textOfButton ? textOfButton : ""}
      </button>
    </article>
  );
}

export default MoviesCard;
