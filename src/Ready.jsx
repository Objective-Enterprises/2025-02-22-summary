import { useState } from 'react'
import Question from './Question'

export default function Ready () {
  const [ready, setReady] = useState(false)
  if (ready) {
    return (
      <Question />
    )
  }
  function handleClick () {
    setReady(true)
  }
  return (
    <button onClick={handleClick}>Ready?</button>
  )
}