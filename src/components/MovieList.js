import { POSTER_PATH } from '../globals'
import MovieDetails from './MovieDetails'

export default function MovieList(props) {

return(

    props.movies.map((movie) => (

        <div key={movie.id} className="card">
        <img src={`${POSTER_PATH}${movie.backdrop_path}`} alt="poster" />
        <h3>{movie.title}</h3>
        <button onClick = {() => {props.setId(movie.id )}}>View Movie</button>
        </div>
    ))
    
)
}