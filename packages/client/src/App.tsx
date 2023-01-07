import { useEffect } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'

import { GeneralRoutes } from './components/routes/GeneralRoutes'

function App() {
  useEffect(() => {
    const fetchServerData = async () => {
      const url = `http://localhost:${__SERVER_PORT__}`
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)
    }

    fetchServerData()
  }, [])
  return (
    <BrowserRouter>
      <GeneralRoutes />
    </BrowserRouter>
  )
}

export default App
