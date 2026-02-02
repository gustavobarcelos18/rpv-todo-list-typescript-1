import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState<number>(0)
  const [resultado, setResultado] = useState("par")

  useEffect(() => {
    setResultado(count % 2 === 0 ? "par" : "ímpar")
  }, [count])
  return (
    <>
      <button onClick={() => {
        setCount(oldState => oldState + 1)
      }}>
        count is {count}
      </button>
      <p>{resultado}</p>
    </>
  )
}

export default App
