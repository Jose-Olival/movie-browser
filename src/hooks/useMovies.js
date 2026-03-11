import { useState } from 'react'
import withMovies from '../mocks/with-results.json'
import noMovies from '../mocks/no-results.json'

export function useMovies ({ query }) {
  const [response, setResponse] = useState([])

  const rawMovies = response.Response === 'True' 
  ? response.Search 
  : []

  const mappedMovies = rawMovies.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))

  const getMovies = () => {
    console.log(`getMovies llamado con ${query}`)
    const bool = query ? true : false
    console.log(bool)
    if (query) {
      setResponse(withMovies)
    }else {
      setResponse(noMovies)
    }
  }

  return { movies: mappedMovies, getMovies }
}