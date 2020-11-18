import React, {useState, createContext} from 'react'

export const MovieContext = createContext();

export const MovieProvider = props => {

    const [movies, setMovies] = useState([
        {
            name: 'Harry Potter',
            price: '100Rs',
            id: 231
        },
        {
            name: 'Jenkins',
            price: '10Rs',
            id: 291
        },
        {
            name: 'Game Of Thrones',
            price: '150Rs',
            id: 251
        },
        {
            name: 'Game Of Rome',
            price: '250Rs',
            id: 101
        }
    ])

    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    )
}

