import { useEffect } from 'react'
import './App.css'
import Avatar from './components/ui/Avatar/Avatar'

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
  return <div className="App"><Avatar src='https://via.placeholder.com/150' /></div>
}

export default App
