import viteLogo from '/vite.svg'
import reactLogo from '@/assets/react.svg'
import { useState } from 'react'

console.log(import.meta.env.VITE_API_URL)

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>
        <a target="_blank" href="https://vitejs.dev">
          <img src={viteLogo} alt="Vite logo" className="logo" />
        </a>
        <a target="_blank" href="https://react.dev">
          <img src={reactLogo} alt="React logo" className="logo react" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
