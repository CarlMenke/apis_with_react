import './styles/App.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from './globals'
import MovieList from './components/MovieList'
import MovieDetails from './components/MovieDetails'

export default function App() {

  useEffect(() => {
    async function getMovies() {
      const res = await axios.get(`${BASE_URL}/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}`)
      setMovies(res.data.results)
    }
    getMovies()
  }, [])



  async function getMovieFromId (movieId) {
    const res = await axios.get(`${BASE_URL}/movie/${movieId}?api_key=${process.env.REACT_APP_TMDB_KEY}`);
    return res.data.results;
  }


  const [movieId, setMovieId] = useState([])
  const [movies, setMovies] = useState([])
  const [selectedMovie, setSelectedMovie] = useState(null) // this should be a movie once you select one

  const setId = (movieId) =>{
    setSelectedMovie(getMovieFromId(movieId))
  }
    return (
      <div className = 'app'>
        <MovieList setSelectedMovie = {setSelectedMovie} className = {'grid'} movies = {movies} setId = {setId} selectedMovie = {selectedMovie} setMovieId = {setMovieId} movieId = {movieId}/> 
      </div>
    )
}
