import { useState } from 'react'
import { useSearch } from './hooks/useSearch'
import { useMovies } from './hooks/useMovies'
import MovieList from './componets/MovieList'


function App() {
  const [sort, setSort] = useState(false)
  const {query, updateQuery, error} = useSearch()
  const { movies, getMovies } = useMovies({ query, sort }) 

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies()
  }

  const handleSort = () => {
    setSort(!sort)
  }

  return (
    <div className="page">
      <header>
        <h1>Buscador de Peliculas</h1>
        <form className="search-bar" onSubmit={handleSubmit}>
          <input value={query} onChange={updateQuery} name='query' type="text" placeholder="Superman, The Sinners, The Lord Of The Rings..." />
          <input type="checkbox" value={sort} name="sort" onChange={handleSort}/>
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
