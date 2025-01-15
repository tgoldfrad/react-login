import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './components/HomePage'
import { RouterProvider } from 'react-router'
import { router } from './router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <HomePage/> */}
      <RouterProvider router={router} />
    </>
  )
}

export default App
