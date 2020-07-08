import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home.js';
// import MovieDetail from './components/MovieDetail.js';

export default function App() {
  return (
    <div className="App">
      <h1 className="display-1 text-center my-3">Popular Movies</h1>
      <Home />
    </div>
    // <Router>
    //   <h1 className="display-1 text-center my-3">Popular Movies</h1>
    //   <Switch>
    //     <Route path='/'>
    //       <Home/>
    //     </Route>
    //     <Route path='/:id'>
    //       <MovieDetail/>
    //     </Route>
    //   </Switch>
    // </Router>
  );
}