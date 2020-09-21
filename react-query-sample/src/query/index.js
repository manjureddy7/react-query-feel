import { useQuery } from 'react-query';

import { getMovies } from '../api'
// Get movies query
export const useMovies = (key) => useQuery(key, getMovies)