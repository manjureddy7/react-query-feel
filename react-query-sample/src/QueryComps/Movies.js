import React from 'react';
import { useMovies } from '../query';
import MovieCount from './MovieCount';
import MovieList from './MovieList';
import QueryStatus from './QueryStatus';

const Movies = () => {
    const { isLoading, error, data } = useMovies('movies');
    return (
        <>
            {isLoading && <div>Loading....</div>}
            {error && <div>{error}</div>}
            {data && (
                <div>
                    <QueryStatus status={data.msg} />
                    <MovieCount count={data.movies.length} />
                    <MovieList list={data.movies}/>
                </div>
            )}
        </>
    )
}

export default Movies;