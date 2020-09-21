import React from 'react';

const MovieList = ({list}) => {
    return(
        <>
            {
                list.map(movie => (
                    <div key={movie.name}>
                        <h1>Movie Name: {movie.name}</h1>
                        <h4>Rating: {movie.rating}</h4>
                    </div>
                ))
            }
        </>
    )
}

export default MovieList;