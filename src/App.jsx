import { useEffect, useRef, useState } from 'react'
import MovieList from './componets/MovieList'
import { useMovies } from './hooks/useMovies'

function useSearch () {
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = query === ''
      return
    }

    if (query === ' ') {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setError('No se puede realizar busquedas con espacio en blanco')
      return
    }

    if (query.length < 3) {
      setError('No se puede realizar busquedas con menos de 3 caracteres')
      return
    }

    setError(null)

  }, [query])

  const updateQuery = (event) => {
    if (event.target.value.startsWith(' ')) return
    setQuery(event.target.value)
  }

  return {query, updateQuery, error}
}

function App() {
  const { movies, getMovies } = useMovies({ query }) 
  const {query, updateQuery, error} = useSearch()

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
