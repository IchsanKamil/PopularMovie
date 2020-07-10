import React from 'react';
import { CardColumns, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import MovieFavorite from '../components/MovieFavorites.js';

function Favorite() {
  const {favorites} = useSelector(state => state.favoriteReducer)

  return (
    <Container>
      <CardColumns>
        { favorites.map(favorite => {
          return <MovieFavorite favorite={favorite} key={favorite.id} />
        }) }
      </CardColumns>
    </Container>
  )
}

export default Favorite