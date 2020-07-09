import React from 'react';
import { Card } from 'react-bootstrap';

export default props => {
  return (
    <>
      <Card style={{ cursor: `pointer`, background: `#96c7d5` }}>
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original${props.favorite.poster_path}`} alt="poster favorite" height="350" />
        <Card.Body>
          <Card.Title>{props.favorite.title}</Card.Title>
          <Card.Text>
            {props.favorite.overview}
          </Card.Text>
          <Card.Text>
            Release : {props.favorite.release_date}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}