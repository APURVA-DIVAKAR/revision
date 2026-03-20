import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ToDo from './Components/ToDo'
import Accordian from './Components/Accordian'

function App() {
  const [count, setCount] = useState(0)

  const data = [
    {
      title:"Title 1",
      details:" You are seeing data for Title 1."

    },
     {
      title:"Title 2",
      details:" You are seeing data for Title 2."
    },
     {
      title:"Title 3",
      details:" You are seeing data for Title 3."
    },
     {
      title:"Title 4",
      details:" You are seeing data for Title 4."
    },
  ]

  return (
    <>
      {/* <ToDo/> */}
      <Accordian data = {data}/>
      
    </>
  )
}

export default App
