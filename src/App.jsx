import MovieList from './componets/MovieList'
import { useSearch } from './hooks/useSearch'
import { useMovies } from './hooks/useMovies'


function App() {
  const {query, updateQuery, error} = useSearch()
  const { movies, getMovies } = useMovies({ query }) 

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies()
  }

  return (
    <div className="page">
      <header>
        <h1>Buscador de Peliculas</h1>
        <form className="search-bar" onSubmit={handleSubmit}>
          <input value={query} onChange={updateQuery} name='query' type="text" placeholder="Superman, The Sinners, The Lord Of The Rings..." />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{color: '#a11'}}>{error}</p>}
      </header>
      <main>
        {
          <MovieList movies={movies} />
        }
      </main>
    </div>
  )
}

export default App
