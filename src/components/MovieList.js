import { POSTER_PATH } from '../globals'
import MovieDetails from './MovieDetails'
import {useState} from 'react'
export default function MovieList(props) {

    const [showSelected, setShowSelected] = useState(false)

return(
<div className={props.className}>
    {
    props.movies.map((movie) => (

        <div key={movie.id} className="card">
        <img src={`${POSTER_PATH}${movie.backdrop_path}`} alt="poster" />
        <h3>{movie.title}</h3>
        <button onClick = {() => {
            props.setId(movie.id)
            setShowSelected(true)
            }}>View Movie</button>
        <MovieDetails showSelected = {showSelected} setSelectedMovie = {props.setSelectedMovie} movieId = {movie.id} selectedMovie = {props.selectedMovie}/>
        </div>
    ))
}
    </div>
    
)
}