function Movie({ movie }) {
  return (
    <li key={movie.imdbID}>
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
      <img src={movie.Poster} alt={movie.Title + "'s poster"} />
    </li>
  );
}

export function MovieList({ movies }) {
  return (
    <ul>
      {movies.length > 0 ? (
        movies.map((movie) => <Movie key={movie.imdbID} movie={movie} />)
      ) : (
        <p>No hay resultados para esta búsqueda</p>
      )}
    </ul>
  );
}

export default MovieList;