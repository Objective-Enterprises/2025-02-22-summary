import { useContext } from "react"
import context from "./context"

export default function ResultTable () {
  const value = useContext(context)
  // Lifting the state: read the state at the bottom
  const rows = value.results.map((result, index) => {
    return (
      <tr key={index}>
        <td>{result.first}</td>
        <td>{result.second}</td>
        <td>{result.answer}</td>
      </tr>
    )
  })
  return (
    <table>
      <thead>
        <tr>
          <th>First</th>
          <th>Second</th>
          <th>Answer</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  )
}