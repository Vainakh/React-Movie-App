import React, { useState } from 'react';
import { 
  API_URL, 
  API_KEY, 
  IMAGE_BASE_URL, 
  BACKDROP_SIZE, 
  POSTER_SIZE 
} from '../config';


//import components;

import Grid from './elements/Grid';
import HeroImage from './elements/HeroImage';
import LoadMoreBtn from './elements/LoadMoreBtn';
import MovieThumb from './elements/MovieThumb';
import SearchBar from './elements/SearchBar';
import Spinner from './elements/Spinner';


//custom Hook;

import { useHomeFetch } from './hooks/useHomeFetch';


import NoImage from './images/no_image.jpg';

  
const Home = () => {
  
  const [
    {
      state: {
        movies, 
        currentPage, 
        totalPages, 
        heroImage
      }, 
      loading, 
      error
    }, 
      fetchMovies
    ] = useHomeFetch();

  const [searchTerm, setSearchTerm] = useState('');


  const LoadMoreMovies = () => {

    const searchEndpoint = `${API_URL}search/tv?api_key=${API_KEY}&query=${searchTerm}&page=${currentPage + 1}`;
    const popularEndpoint = `${API_URL}tv/popular?api_key=${API_KEY}&page=${currentPage + 1}`;

    const endpoint = searchTerm ? searchEndpoint : popularEndpoint;

    fetchMovies(endpoint);
  };


  if (error) return <div>Ooops...Something went wrong!</div>;
  if (!movies[0]) return <Spinner/>;

  return (
    <>
      <HeroImage 
        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
        title={heroImage.original_name}
        text={heroImage.overview}
      />
      <SearchBar />
      <Grid header={searchTerm ? "Search Results" : "Popular Movies"}>
        {
          movies.map(movie => (
            <MovieThumb
              key={movie.id}
              movieId={movie.id}
              clickable
              image={movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` : NoImage
              }
              movieName={movie.original_title}
             /> 
          ))
        }
      </Grid>
      {loading && <Spinner />}
      {currentPage < totalPages && !loading && (
        <LoadMoreBtn 
        text="Load More"
        callback={LoadMoreMovies}
      />
      )} 
    </>
  )
}

export default Home;