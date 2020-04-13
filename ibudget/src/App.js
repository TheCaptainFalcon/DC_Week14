import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import Home from './components/Home';
import Calculator from './components/Calculator';

function App() {
  return (
    <div className="App">
      <Router>
        <nav className='App-nav'>
          <NavLink activeClassName='active-link' exact={true} to='/'>Home </NavLink>
          <NavLink activeClassName='active-link' to='/calculator'>Calculator</NavLink>
        </nav>
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route exact path ='/calculator' component={ Calculator } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
