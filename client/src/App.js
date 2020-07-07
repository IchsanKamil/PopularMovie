import React, { Component } from 'react';
import Movie from './components/Movie.js';
import {CardColumns, Container} from 'react-bootstrap'
// import Container from 'react-bootstrap/Container'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    const url = " https://api.themoviedb.org/3/movie/popular?api_key=e68c0c0ec31d30e3fbe6a92cda66f34a&language=en-US&page=1";
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        console.log(data.results);
        this.setState({
          movies: data.results
        })
      })
      .catch(error => {
        console.log(error);
      });
  }

  render(h) {
    return (
      <>
        <Container>
          <CardColumns>  
            {this.state.movies.map((movie, idx) => {
              return <Movie movie = {movie} key={idx}/>
            })}
          </CardColumns>
        </Container>
      </>
    )
  }
}

export default App;
