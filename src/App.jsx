import { useState } from 'react'
import './App.css'
import song from './118707__teqstudios__perfect-timing.mp3'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>JourneyFM</h1>
        <h4>I'm a regular guy in his mid 30's, committed to learning how to live again. I've decided to document my journey here in a variety of different mediums. Thank you for visiting it!</h4>
      </div>
      <audio controls>
        <source src={song} />
      </audio>
    </>
  )
}

export default App
