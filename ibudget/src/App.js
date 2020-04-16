import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import Home from './components/Home';
import Calculator from './components/Calculator';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav} from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar className='App-nav' bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            <Nav.Link><NavLink activeClassName='active-link' exact={true} to='/'>Home</NavLink></Nav.Link>
            <Nav.Link> <NavLink activeClassName='active-link' to='/calculator'>Calculator</NavLink></Nav.Link>
          </Navbar.Brand>
        </Navbar>
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route exact path ='/calculator' component={ Calculator } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
