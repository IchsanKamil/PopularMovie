import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home.js';
import MovieDetail from './components/MovieDetail.js';

export default function App() {
  return (
    <Router>
      <h1 className="display-1 text-center my-3">Popular Movies</h1>
      <Switch>
        <Route path='/movies/:id'>
          <MovieDetail/>
        </Route>
        <Route path='/'>
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}