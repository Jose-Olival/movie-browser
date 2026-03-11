import { useState } from 'react'
import noMovies from '../mocks/no-results.json'

const SEARCH_MOVIES_API_KEY = '428d3160'
const SEARCH_MOVIES_API_URL = 'https://www.omdbapi.com/?apikey=[key]&s=[query]'

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
    const url = SEARCH_MOVIES_API_URL
      .replace("[key]", SEARCH_MOVIES_API_KEY)
      .replace("[query]", query)
    if (query) {
      fetch(url)
        .then(res => res.json())
        .then(json => {
          setResponse(json)
        })
    }else {
      setResponse(noMovies)
    }
  }

  return { movies: mappedMovies, getMovies }
}