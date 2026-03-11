import MovieList from './componets/MovieList'
import { useMovies } from './hooks/useMovies'

function App() {
  const { movies } = useMovies()

  return (
    <div className="page">
      <header>
        <h1>Buscador de Peliculas</h1>
        <form className="search-bar">
          <input type="text" placeholder="Superman, The Sinners, The Lord Of The Rings..." />
          <button type="submit">Buscar</button>
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
