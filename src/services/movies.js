const SEARCH_MOVIES_API_KEY = '428d3160'
const SEARCH_MOVIES_API_URL = 'https://www.omdbapi.com/?apikey=[key]&s=[query]'

export const searchMovies =  async({ query }) => {
  if (query === '') return null

  const url = SEARCH_MOVIES_API_URL
    .replace('[key]', SEARCH_MOVIES_API_KEY)
    .replace('[query]', query)

  try {
    const response = await fetch(url)
    const json = await response.json()
      
    return json.Response === 'True' 
    ? json.Search.map(movie => ({
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster
      }))
    : []  
  } catch (e) {
    throw new Error('Error searching movies: ' + e)
  }
}
