import React, { useEffect, useState } from 'react'
import './App.css'
import logo from './logo.svg'

const App = (): JSX.Element => {
  // Create the count state.
  const [count, setCount] = useState(0)
  // Create the counter (+1 every second).
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000)
    return () => clearTimeout(timer)
  }, [count, setCount])
  // Return the App component.
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>
          Page has been open for <code>{count}</code> seconds.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button className="bg-purple-300">Click here</button>
        </p>
      </header>
    </div>
  )
}

export default App
