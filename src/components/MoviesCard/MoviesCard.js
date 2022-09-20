import "./MoviesCard.css";

function MoviesCard({
  title,
  time,
  imageUrl,
  trailerLink,
  nameOfButton,
  textOfButton,
}) {
  const mins = time % 60;
  const hours = Math.trunc(time / 60);
  return (
    <article className="movie-card">
      <h2 className="movie-card__name">{title}</h2>
      <span className="movie-card__time">{`${
        hours ? `${hours} ч. ` : ""
      }${mins} мин.`}</span>
      <a
        className="movie-card__trailer-link"
        href={trailerLink}
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="movie-card__image"
          src={`https://api.nomoreparties.co${imageUrl}`}
          alt={title}
        />
      </a>
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
