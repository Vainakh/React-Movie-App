import React from 'react';


//components
import Actor from './elements/Actor';
import MovieInfo from './elements/MovieInfo';
import MovieInfoBar from './elements/MovieInfoBar';
import Navigation from './elements/Navigation';
import Grid from './elements/Grid';
import Spinner from './elements/Spinner';

import { useMovieFetch } from './hooks/useMovieFetch';


const Movie = ( {movieId} ) => {
  
  const [ movie, loading, error ] = useMovieFetch(movieId);
  console.log(movie);

  return (
    <>
  <div>Movie: {movieId}</div>
    <Navigation/>
    <MovieInfo/>
    <MovieInfoBar/>
    <Grid>
      <Actor/>
    </Grid>
    <Spinner/>
  </>
  )
};

export default Movie;