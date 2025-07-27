import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Text text="hello" />
    <Text text="What's up" />
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
