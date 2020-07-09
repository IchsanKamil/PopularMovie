import React from 'react';
import {
  useParams
} from "react-router-dom";
import useFetch from '../hooks/useFetch.js';
import { Card, Container } from 'react-bootstrap';

function MovieDetail() {
  const { id } = useParams()
  const {
    data: moviesDetail,
    error: errorMoviesDetail,
    loading: loadingMoviesDetail,
  } = useFetch(`https://api.themoviedb.org/3/movie/${id}?api_key=e68c0c0ec31d30e3fbe6a92cda66f34a&language=en-US`)
  // let budget = Number(({moviesDetail.budget}).toFixed(1)).toLocaleString()
  return (
    <>
      {loadingMoviesDetail && <p className="display-3">Loading...</p>}
      {errorMoviesDetail && <p>{errorMoviesDetail.message}</p>}

      <Container>
        <Card className="bg-dark text-white">
          <Card.Img src={`https://image.tmdb.org/t/p/original${moviesDetail.poster_path}`} alt="poster movie" />
          <Card.ImgOverlay>
            <Card.Title>{moviesDetail.title}</Card.Title>
          </Card.ImgOverlay>

          <Card.Text>
            {moviesDetail.overview}
          </Card.Text>
          <Card.Text>
            Budget: {moviesDetail != null && moviesDetail.budget}
            {/* {Number((moviesDetail.budget).toFixed(1)).toLocaleString()} */}
          </Card.Text>
          <Card.Text>
            Revenue: {moviesDetail.revenue}
          </Card.Text>
          {/* <Card.Text>
            Revenue: {moviesDetail.budget}
          </Card.Text> */}
          <Card.Text>            
            <p>Release : {moviesDetail.release_date}</p>
          </Card.Text>
        </Card>
      </Container>
    </>
  )
}

export default MovieDetail;