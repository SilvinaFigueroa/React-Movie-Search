import './App.css'
// Imports
import { useState } from "react"
import axios from "axios"

//Components
import Form from './components/Form'
import MovieDisplay from './components/MovieDisplay'

let apiKey = import.meta.env.VITE_apiKey

function App() {
  //UseState
  const [movieData, setMovieData] = useState(null)

  async function search(searchTerm) {
    try {
      // Make and apiCall and save response in variable
      let response = await axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`)
      setMovieData(response.data)

    } catch (err) {
      console.error(err)

    }

  }

  return (
    <>
      <Form movieSearch={search} />
      <MovieDisplay />
    </>
  )
}

export default App
