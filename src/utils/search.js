export function searchMovies(movies, {keyWord, isShort}) {
  const normalize = (arg) => (arg && arg.toLowerCase().trim()) || "";
  const word = normalize(keyWord);
  return movies.filter((movie) => {
    const ruName = normalize(movie.nameRU);
    const enName = normalize(movie.nameEN);
    return (
      (ruName.match(word) || enName.match(word)) &&
      (movie.duration <= 40 || !isShort)
    );
  });
}
