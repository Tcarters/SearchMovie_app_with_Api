// jsx for component we create in React and to have the logo of react on our file.
import React from 'react';

const MovieCard = ( { movie} ) => { // use of {} in props to destructure it
    return (
        <div className="movie">
        <div>
            <p>{ movie.Year }</p>
        </div>

        <div>
            <img src={ movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400' } alt={movie.Title} />
        </div>

        <div>
            <span>{movie.Type}</span>
            <h3>{movie.Title}</h3>
        </div>

    </div>
    );
}

export default MovieCard;