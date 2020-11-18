import React, {useContext} from 'react'
import { MovieContext } from './MovieContext'

const Navbar = () => {
    const [movies, setMovies] = useContext(MovieContext);
    return (
        <div className="navbar">
            <h1>Movieflix</h1>
            <h4>List Of Movies: 
            <span>{movies.length}</span>
            </h4>
        </div>
    )
}

export default Navbar
