function Movie({ movie }) {
  return (
    <li>
      <h3>{movie.title}</h3>
      <p>{movie.year}</p>
      <img src={movie.poster} alt={movie.title + "'s poster"} />
    </li>
  );
}

export function MovieList({ movies }) {
  return (
    <ul>
      {movies.length > 0 ? (
        movies.map((movie) => <Movie key={movie.id} movie={movie} />)
      ) : (
        <p>No hay resultados para esta búsqueda</p>
      )}
    </ul>
  );
}

export default MovieList;