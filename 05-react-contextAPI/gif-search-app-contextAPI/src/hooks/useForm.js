import { useState, useRef } from 'react'

// * Custom hook refactors component logic
// * Here useForm requires onSubmit and onChange params to be supplied by component consumer in order to use ir within its logic
// ? useForm parameters doesnt requires to be deestructured( !!they are not props)

export const useForm = (onSubmit, onChange) => {
  const [query, setQuery] = useState('')
  const inputRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmedQuery = query.trim()
    if (trimmedQuery === '' || trimmedQuery.length < 2) {
      return
    }
    onSubmit(query)
  }

  const handleInputChange = (e) => {
    const { target } = e
    const query = target.value
    const trimmedQuery = query.trim()
    onChange(trimmedQuery)
    setQuery(trimmedQuery)
  }

  return {
    handleSubmit,
    handleInputChange,
    query,
    inputRef
  }
}
