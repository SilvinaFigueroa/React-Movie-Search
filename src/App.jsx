import './App.css'
// Imports
import { useState, useEffect } from "react"
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

      if (searchTerm === '') {
        let min = 1000000
        let max = 2000000

        let random = Math.round(Math.random() * (max - min)) + min
        random = "tt" + random
        console.log(random)

        let response = await axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&i=${random}`)
        setMovieData(response.data)
      }
      else {

        // Make and apiCall and save response in variable
        let response = await axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`)
        setMovieData(response.data)
      }
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    search('')

  }, [])

  return (
    <>
      <Form movieSearch={search} />
      {/* Conditional rendering */}
      {/* {movieData ? <MovieDisplay movie={movieData} /> : <p>Nothing to Display</p>} */}
      {/* Alternative {movieData && <MovieDisplay movie={movieData} /> } */}
      <MovieDisplay movie={movieData} />
    </>
  )
}

export default App
