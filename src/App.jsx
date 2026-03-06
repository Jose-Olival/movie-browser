import withMovies from './mocks/with-results.json'
// import noMovies from './mocks/no-results.json'

function App() {
  const data = withMovies

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
          data.Response === 'True' ? 
          <ul>
            {
              data.Search.map(movie => (
                <li key={movie.imdbID}>
                  <h3>{movie.Title}</h3>
                  <p>{movie.Year}</p>
                  <img src={movie.Poster} alt={movie.Title + "'s poster"} />
                </li>
              ))
            }
          </ul>
          :
          <p>No hay resultados para esta busqueda</p>
        }
      </main>
    </div>
  )
}

export default App
