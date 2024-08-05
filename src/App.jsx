import { useState } from 'react'
import './App.css'
import { Outlet, Route, Routes } from 'react-router-dom'
import song from './118707__teqstudios__perfect-timing.mp3'
import ApplicationViews from './views/ApplicationViews'

function App() {
  const [count, setCount] = useState(0)

  return (
<ApplicationViews />
  )
}

export default App
