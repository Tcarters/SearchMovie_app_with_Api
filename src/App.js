// const env = require('dotenv').config();

import { useState, useEffect } from "react";

import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

const API_URL = `http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_KEY}`

const movie1 = {
    "Title": "Amazing Spider man Syndrome",
    "Year": "2021",
    "imdbID": "tt2586634",
    "Poster": "N/A"
}

const App = () => {

    const [movies, setMovies] = useState( [] );
    const [searchTerm, setSearchTerm ] = useState('');

    const searchMovies = async (title) => { // async means it takes sometimes to fetch movies data

        const response = await fetch (`${API_URL}&s=${title}`);
        const data = await response.json(); // get data from response

        setMovies(data.Search) ; //'Your data got is: ' + JSON.stringify(data) );
        console.log('Print Key is:' +  process.env.REACT_APP_KEY)
    }

    useEffect( () => {
        searchMovies('Spiderman');

    }, []);
    
    return (
    
    <div className="app">
            <h1>Welcome To MovieLand...</h1> 
            
            <div className="search">
                
                <input 
                    placeholder="Search for movies"
                    value={searchTerm}
                    onChange={ (e) => setSearchTerm(e.target.value) } // e here mean event
                />
                
                <img 
                    src="{SearchIcon}"
                    alt="search"
                    onClick={() => searchMovies(searchTerm) }
                />
        </div>

        { movies?.length > 0 ? (
                    <div className="container">
                         {/* <MovieCard movie1={ movie1 } />   printing each movie */}
                         { movies.map( (movie ) => ( // map each movie 
                            <MovieCard movie={movie} />
                        ))}
                    </div>

                ) : (
                    <div className="empty">
                        <h2>NO movies found</h2>
                    </div> 
                    )}
                    </div>
        ); };

//         <div className="container">
//             <MovieCard movie1={ movie1 } />
//         </div>

//         {/* </> */}
//         </div>
//     );
// }

export default App; // export every component created
