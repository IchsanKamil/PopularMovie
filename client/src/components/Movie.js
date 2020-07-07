import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'

class Movie extends Component {
  constructor() {
    super()
    this.state = {
      // movie: ''
    }
  }

  render() {
    return (
      <>
        <div>
        <Card>
          <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original${ this.props.movie.poster_path }`} alt="poster movie" height="350"/>
          <Card.Body>
            <Card.Title>{ this.props.movie.title }</Card.Title>
            <Card.Text>
            { this.props.movie.overview }
            </Card.Text>
            <Card.Text>
            <p>Release : { this.props.movie.release_date }</p>
            </Card.Text>
          </Card.Body>
          {/* <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer> */}
        </Card>
      </div>
      </>
    )
  }
}

export default Movie