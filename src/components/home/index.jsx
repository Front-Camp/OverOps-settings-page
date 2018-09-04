import React from 'react';
import {Link, Route} from 'react-router-dom';
import Counter from '../counter';

const Home = () => {
  return (
    <div>
      <h1>React + Redux</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
      </ul>
      <Route path={'/counter'} component={Counter} />
    </div>
  );
};

export default Home;
