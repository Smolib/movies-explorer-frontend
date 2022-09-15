import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies() {
  return (
    <main>
      <SearchForm />
      <MoviesCardList needMoreButton={true} />
    </main>
  );
}

export default Movies;
