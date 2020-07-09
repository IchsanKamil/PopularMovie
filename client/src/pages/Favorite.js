import React from 'react';
import { CardColumns, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import MovieFavorite from '../components/MovieFavorites.js';

function Favorite() {
  const favorites = useSelector(state => state.favoriteReducer.favorites)

  return (
    <Container>
      <CardColumns>
        {/* cek */}
        {/* {JSON.stringify(favorites)} */}
        { favorites.map(favorite => {
          return <MovieFavorite favorite={favorite} key={favorite.id} />
        }) }
      </CardColumns>
    </Container>
  )
}

export default Favorite