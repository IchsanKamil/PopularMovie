import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home.js';
import Favorites from './pages/Favorite';
import MovieDetail from './components/MovieDetail.js';
import store from './store';
import { Provider } from 'react-redux';
import { Nav } from 'react-bootstrap';

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Nav className="justify-content-around mt-3" variant="pills" defaultActiveKey="/">
          <Nav.Item>
            <Link to={`/`}>
              Home
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to={`/favorites`}>
              Favorite
            </Link>
          </Nav.Item>
        </Nav>
        <h1 className="display-1 text-center my-3">Popular Movies</h1>
        <Switch>
          <Route path='/movies/:id'>
            <MovieDetail />
          </Route>
          <Route path='/favorites'>
            <Favorites />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}