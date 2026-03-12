import { useState, useEffect, useRef } from "react"

export function useSearch () {
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
