import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>JourneyFM</h1>
        <h4>I'm a regular degular guy in his mid 30's, committed to learning how to live again. This is my journey.</h4>
      </div>
    </>
  )
}

export default App
