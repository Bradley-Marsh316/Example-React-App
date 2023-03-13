import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { MainCard } from './components/MainCard/MainCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <MainCard />
    </div>
  )
}

export default App
