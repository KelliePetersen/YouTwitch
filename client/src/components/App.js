import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const pageOne = () => {
  return (
    <div>page one
      <Link to="/pagetwo">page two</Link>
    </div>
  )
}

const pageTwo = () => {
  return (
    <div>page two
      <Link to="/">page one</Link>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={pageOne}/>
          <Route path="/pagetwo" component={pageTwo}/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
