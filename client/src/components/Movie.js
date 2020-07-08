import React, { useState } from 'react';
import { Card, Modal, Button } from 'react-bootstrap';
// import useFetch from '../hooks/useFetch.js';

export default props => {
  // const { 
  //   data: detailmovie, 
  //   error: errorDetailMovie, 
  //   loading: loadingDetailMovie, 
  // } = useFetch(`https://api.themoviedb.org/3/movie/${props.movie.id}?api_key=e68c0c0ec31d30e3fbe6a92cda66f34a&language=en-US`)

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Card onClick={handleShow} style={{cursor: `pointer`, background: `#96c7d5`}}>
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original${props.movie.poster_path}`} alt="poster movie" height="350" />
        <Card.Body>
          <Card.Title>{props.movie.title}</Card.Title>
          <Card.Text>
            {props.movie.overview}
          </Card.Text>
          <Card.Text>
            <p>Release : {props.movie.release_date}</p>
          </Card.Text>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.movie.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.movie.overview}
        </Modal.Body>
        <Modal.Body>
          Popularity: {props.movie.popularity}
        </Modal.Body>
        <Modal.Body>
          Vote Count: {props.movie.vote_count}
        </Modal.Body>
        <Modal.Body>
          Vote Average: {props.movie.vote_average}
        </Modal.Body>
        <Modal.Body>
          Release Date: {props.movie.release_date}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div >
  )
}