import React, { useEffect } from 'react';
import {
  useParams
} from "react-router-dom";
import { Card, Container } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { getMovie } from '../store/actions/movieAction.js';

function MovieDetail() {
  const { id } = useParams()
  const { movie } = useSelector(state => state.movieReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMovie(id))
  }, [id, dispatch])

  return (
    <>
      <Container>
        <Card className="bg-dark text-white">
          <Card.Img src={`https://image.tmdb.org/t/p/original${movie && movie.poster_path}`} alt="poster movie" />
          <Card.ImgOverlay>
            <Card.Title>{movie && movie.title}</Card.Title>
          </Card.ImgOverlay>

          <Card.Text>
            {movie && movie.overview}
          </Card.Text>
          <Card.Text>
            Budget: {movie && movie.budget}
          </Card.Text>
          <Card.Text>
            Revenue: {movie && movie.revenue}
          </Card.Text>
          <Card.Text>            
            Release : {movie && movie.release_date}
          </Card.Text>
        </Card>
      </Container>
    </>
  )
}

export default MovieDetail;