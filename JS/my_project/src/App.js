import React from "react";
// import { useState } from "react";
import { useEffect, useState } from "react";
import './App.css';
import MovieCard from "./MovieCard";
// import SearchIcon from './search.svg';
const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=5a2c4eba'

    // const movie1 = {
    //     "Title": "The Matrix: Path of Neo",
    //     "Year": "2005",
    //     "imdbID": "tt0451118",
    //     "Type": "game",
    //     // "Poster": "https://m.media-amazon.com/images/M/MV5BZGFiNGU4MjEtODM2ZC00OTg0LThkNmEtZTBlN2FkMmFjOWYzXkEyXkFqcGdeQXVyNTEwNDY2MjU@._V1_SX300.jpg"

    //     "Poster": "N/A"
    // }

const App = () => {
    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()

    console.log(data.Search)
    setMovies(data.Search)
}
    useEffect(()=>{
        searchMovies('Matrix')
    },[])

    return (
        <div className="app">
            <h1>MovieLand</h1>
            <div className="search">
                <input 
                    placeholder="Search for movie"
                    value={searchTerm}
                    onChange={(e)=> setSearchTerm(e.target.value)}
                 />
                 <img 
                    src=''
                    alt="search"
                    onClick={()=>searchMovies(searchTerm)}
                 />
            </div>

            {
                movies?.length > 0
                ? (
                    <div className="container">
                        {movies.map((movie) => (
                            <MovieCard movie={movie} />
                        ))}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>Film nije pronadjen</h2>
                    </div>
                )
            }
         


            {/* <div className="container">
                <MovieCard movie1={movies[0]} />
            </div> */}
                   
        </div>
    )
}

export default App;