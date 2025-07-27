import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MovieCard from './components/MovieCard'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)
  const movieNumber = 1;

  return (
    <>
     <Home />
    </>
  )
}


function Text({text}) {
  return(
    <div>
      {text}
    </div>
  )
}
export default App
