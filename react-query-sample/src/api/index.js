// Get all movies
export const getMovies = () => {
    return fetch('http://localhost:8080/movies').then(data => data.json())
}