import withMovies from '../mocks/with-results.json'

export function useMovies () {
  const rawMovies = withMovies.Search

  const mappedMovies = rawMovies.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))

  return { movies: mappedMovies }
}