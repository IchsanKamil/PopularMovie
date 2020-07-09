import React, { Component } from 'react';
import Movie from '../components/Movie.js';
import { CardColumns, Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getMovie } from '../store/actions/movieAction.js';

class Home extends Component {
  componentDidMount() {
    this.props.getMovie()
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
const mapDispatchToProps = { getMovie }

export default connect(mapStateToProps, mapDispatchToProps)(Home)