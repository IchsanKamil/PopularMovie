import React, { Component } from 'react';
import Movie from '../components/Movie.js';
import { CardColumns, Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getMovies } from '../store/actions/movieAction.js';

class Home extends Component {
  componentDidMount() {
    this.props.getMovies()
  }

  render() {
    return (
      <Container>
        <CardColumns>
          {this.props.movies.map((movie) => {
            return (
              <Movie movie={movie} key={movie.id} />
            )
          })}
        </CardColumns>
      </Container>
    )
  }
}

const mapStateToProps = state => ({ movies: state.movieReducer.movies })
const mapDispatchToProps = { getMovies }

export default connect(mapStateToProps, mapDispatchToProps)(Home)