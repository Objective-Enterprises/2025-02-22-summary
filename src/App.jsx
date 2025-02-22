import Ready from "./Ready"
import ResultTable from "./ResultTable"
import Provider from "./Provider"

export default function App () {
  return (
    <Provider>
      <h1>Quiz App</h1>
      <Ready /> 
      <h2>Results</h2>
      <ResultTable />
    </Provider>
  )
}