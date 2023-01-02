import { useState } from 'react'
import '../css/App.css'
import InputCard from "./dataInput"
import logo from '../assets/pepefrg-4.gif'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://discord.gg/sMN4Kc9k">
          <img src={logo}/>
        </a>
      </div>
      <h1>Welcome To The Poketmonster Hang Out Graph</h1>
      <p>
          This is a fun project that builds a weighted graph on how often everyone hangs out with each other in Poketmonster.
      </p>
      <InputCard />
    </div>
  )
}

export default App
