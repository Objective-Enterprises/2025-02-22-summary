import { useContext, useRef, useState } from 'react'
import context from './context'

export default function Question () {
  const value = useContext(context)
  console.log('value:', value)
  const answerRef = useRef()
  const first = Math.ceil(Math.random() * 10)
  const second = Math.ceil(Math.random() * 10)
  function handleChange (event) {
    answerRef.current = event.target.value
  }
  function handleSubmit (event) {
    event.preventDefault()
    const total = first + second

    // Lifting the state (set at the bototm level)
    const result = { first, second, answer: answerRef.current }
    const newResults = [...value.results, result]
    value.setResults(newResults)
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Question</h2>
      <div>{first} + {second} =</div>
      <input onChange={handleChange} />
      <button type='submit'>Submit</button>
    </form>
  )
}