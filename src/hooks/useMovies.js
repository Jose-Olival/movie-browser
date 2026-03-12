import { useRef, useState } from 'react'
import { searchMovies } from '../services/movies'

export function useMovies ({ query }) {
  const [movies, setMovies] = useState([])
  const previousQuery = useRef('')

  const getMovies = async () => { 
    if (query === previousQuery.current) return
    previousQuery.current = query
    const newMovies = await searchMovies({query})
    setMovies(newMovies)
  }

  return { movies, getMovies }
}