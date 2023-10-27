import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addValue=()=>{
    setCount(count+1)
    setCount(count+1)
    setCount(count+1)
    setCount(count+1)
    setCount(count+1)

  }

  const removeValue=()=>{
    setCount(count-1)
  }

  return (
    <>
     <h1>React Course {count}</h1>
     <h2>Counter Value</h2>
     <button onClick={addValue}>Add value</button> {" "}
     <button onClick={removeValue}>Remove value</button>
     <footer>footer: </footer>
    </>
  )
}

export default App
