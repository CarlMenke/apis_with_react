import './styles/App.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from './globals'
import MovieList from './components/MovieList'
import MovieDetails from './components/MovieDetails'

export default function App() {

  useEffect(() => {
    async function getMovies() {
      const res = await axios.get(`${BASE_URL}/discover/movie?api_key=383216bc3470b7b5495792c737a56154`)
      setMovies(res.data.results)
    }
    getMovies()
  }, [])

  async function getMovieFromId (movieId) {
    const res = await axios.get(`${BASE_URL}/movie/${movieId}?api_key=383216bc3470b7b5495792c737a56154`)
    return res;
  }


  const [movieId, setMovieDetails] = useState([])
  const [movies, setMovies] = useState([])
  const [selectedMovie, setSelectedMovie] = useState(null) // this should be a movie once you select one


  const setId = (movieId) =>{
    setSelectedMovie(getMovieFromId(movieId))
  }

  useEffect(()=>{
    <MovieDetails />
  },[selectedMovie])

  return (
  <div>
    <MovieList movies = {movies} setId = {setId}/> 
  </div>
  )
}
