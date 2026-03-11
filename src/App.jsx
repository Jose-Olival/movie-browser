import MovieList from './componets/MovieList'
import { useMovies } from './hooks/useMovies'

function App() {
  const { movies } = useMovies()

  const handleSubmit = (event) => {
    event.preventDefault()
    const { query } = Object.fromEntries(new window.FormData(event.target))
    console.log(query)
  }

  return (
    <div className="page">
      <header>
        <h1>Buscador de Peliculas</h1>
        <form className="search-bar" onSubmit={handleSubmit}>
          <input name='query' type="text" placeholder="Superman, The Sinners, The Lord Of The Rings..." />
          <button type='submit'>Buscar</button>
        </form>
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
