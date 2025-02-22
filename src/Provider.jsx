import { useState } from 'react'
import context from './context'

export default function Provider (props) {
  const [results, setResults] = useState([])

  const value = { results, setResults }

  return (
    <context.Provider value={value}>
      {props.children}
    </context.Provider>
  )
}