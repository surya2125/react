import { useState } from 'react'

import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className="text-3xl bg-green-500 p-3">Vite TailwindProps</h1>
    <Card key='0'/>
    <Card userName='Surya Kumar' assigned='Dev' key='1'/>
    </>
  )
}

export default App
