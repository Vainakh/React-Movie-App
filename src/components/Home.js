import React, { useState } from 'react';
import { 
  POPULAR_BASE_URL,
  SEARCH_BASE_URL, 
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

  const searchMovies = (search) => {
    const endpoint = search ? SEARCH_BASE_URL + search : POPULAR_BASE_URL;
    setSearchTerm(search);
    fetchMovies(endpoint);
  };

  const LoadMoreMovies = () => {

    const searchEndpoint = `${SEARCH_BASE_URL}${searchTerm}&page=${currentPage + 1}`;
    const popularEndpoint = `${POPULAR_BASE_URL}&page=${currentPage + 1}`;

    const endpoint = searchTerm ? searchEndpoint : popularEndpoint;

    fetchMovies(endpoint);
  };


  if (error) return <div>Ooops...Something went wrong!</div>;
  if (!movies[0]) return <Spinner/>;

  return (
    <>
    {
      !searchTerm && (
        <HeroImage 
        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
        title={heroImage.original_name}
        text={heroImage.overview}
      />
      )} 
      
      <SearchBar 
        callback={searchMovies}
      />
      <Grid header={searchTerm ? "Search Results" : "Popular Movies"}>
        {
          movies.map(movie => (
            <MovieThumb
              key={movie.id}
              movieId={movie.id}
              clickable
              image={movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path : NoImage
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