import { useRef, useState } from 'react'
import { searchMovies } from '../services/movies'

export function useMovies ({ query, sort }) {
  const [movies, setMovies] = useState([])
  const previousQuery = useRef('')

  const getReleaseYear = (movie) => {
    return Number(movie.year.slice(0,4))
  }
  
  const sortMovies = (moviesToSort) => {
    return moviesToSort.sort((a,b) => {
      const yearA = getReleaseYear(a)
      const yearB = getReleaseYear(b)
      return yearA > yearB ?  -1 
      : yearB > yearA ? 1 
      : 0
    })
  }

  const getMovies = async () => { 
    if (query === previousQuery.current) return
    previousQuery.current = query
    const rawMovies = await searchMovies({query})
    const newMovies = sort ? sortMovies(rawMovies) : rawMovies
    setMovies(newMovies,)
  }

  return { movies, getMovies }
}
