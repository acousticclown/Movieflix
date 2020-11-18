import React, {useContext} from 'react'
import Movie from './Movie'
import { MovieContext } from './MovieContext'


const Movielist = () => {

    const [movies, setMovies] = useContext(MovieContext);

    return (
        <div className="movie-container">
        {movies.map(movie => (
            <Movie name={movie.name} price={movie.price} />
        ))}    
        </div>
    )
}

export default Movielist
