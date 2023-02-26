import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Chart from './Chart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Chart/>
    </div>
  )
}

export default App
