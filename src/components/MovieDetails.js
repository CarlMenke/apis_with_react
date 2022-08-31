import { BASE_URL } from '../globals'
import { useEffect , useState} from 'react'
import axios from 'axios'

export default function MovieDetails(props) {




    useEffect(() => {
        if(props.showSelected){
        console.log(props.movieId)
        }

    }, [props.selectedMovie])


    if(props.showSelected){
        return(
            <div> hello</div>
        )
    }
}