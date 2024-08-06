import { useState } from 'react'
import './App.css'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import ApplicationViews from './views/ApplicationViews'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
<ApplicationViews />
</BrowserRouter>

  )
}

export default App
