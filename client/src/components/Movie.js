import React from 'react';
import { Card } from 'react-bootstrap';
import {
  Link
} from "react-router-dom";
import { useDispatch } from 'react-redux'

export default props => {
  const dispatch = useDispatch()

  const addFavorite = () => {
    // useSelector
    dispatch({
      type: 'ADD_FAVORITE',
      payload: {
        newFavorite: {
          id: props.movie.id,
          poster_path: props.movie.poster_path,
          title: props.movie.title,
          overview: props.movie.overview,
          release_date: props.movie.release_date
        }
      }
    })
  }
  return (
    <>
      <Card style={{ background: `#96c7d5` }}>
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original${props.movie.poster_path}`} alt="poster movie" height="350" />
        <Card.Body>
          <Card.Title>{props.movie.title}</Card.Title>
          <Card.Text>
            {props.movie.overview}
          </Card.Text>
          <Card.Text>
            {props.movie.budget}
          </Card.Text>
          <Card.Text>
            Release : {props.movie.release_date}
          </Card.Text>
        </Card.Body>

        <Card.Footer>
          <Link to={`/movies/${props.movie.id}`}>
            <button className="btn btn-primary mr-2">Detail</button>
          </Link >
          <button className="btn btn-success" onClick={addFavorite}>Add to favorite</button>
        </Card.Footer>
      </Card>
    </>
  )
}