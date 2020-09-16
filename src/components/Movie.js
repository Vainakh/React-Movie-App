import React from 'react';


//components
import Actor from './elements/Actor';
import MovieInfo from './elements/MovieInfo';
import MovieInfoBar from './elements/MovieInfoBar';
import Navigation from './elements/Navigation';
import Grid from './elements/Grid';
import Spinner from './elements/Spinner';


const Movie = ( {movieId} ) => {
  
  return (
    <>
  <div>Movie: {movieId}</div>
    <Navigation>Navigation</Navigation>
    <MovieInfo>MovieInfo</MovieInfo>
    <MovieInfoBar>MovieInfoBar</MovieInfoBar>
    <Grid>
      <Actor>Actor</Actor>
    </Grid>
    <Spinner>Spinner</Spinner>
  </>
  )
};

export default Movie;