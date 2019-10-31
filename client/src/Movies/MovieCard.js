import React from 'react';

const movieData = [];

const MovieCard = props => {
    const movieId = movieData.find(movieId => props.match.params.movieId === `${movieId.id}`);
     return (
      <h2>{movieId.name}</h2>
   );
}

export default MovieCard;
