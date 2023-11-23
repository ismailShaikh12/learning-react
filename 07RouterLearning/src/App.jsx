import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='flex text-center bg-gray-400 ' >Hello ISmail by a vite </h1>
      <h2 className='flex text-center text-4xl'>Hello ISmail by a React </h2>
    </>
  )
}

export default App
