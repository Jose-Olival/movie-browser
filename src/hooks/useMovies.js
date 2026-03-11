import { useState } from 'react'
import withMovies from '../mocks/with-results.json'
import noMovies from '../mocks/no-results.json'

export function useMovies ({ query }) {
  const [response, setResponse] = useState([])

  const rawMovies = withMovies.Search

  const mappedMovies = rawMovies.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))

  const getMovies = () => {
    if (query) {
      setResponse(withMovies)
    }else {
      setResponse(noMovies)
    }
  }

  return { movies: mappedMovies, getMovies }
}