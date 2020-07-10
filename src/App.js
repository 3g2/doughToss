import React, { Component } from 'react';
import './App.css';
import Nav from './Components/Nav';
import Home from './Components/HomePage';
import AboutPage from './Components/AboutPage';
import MenuPage from './Components/MenuPage';
import ContactPage from './Components/ContactPage';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return(
      <Router>
          <div className="App">
          <Nav />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={AboutPage} />
              <Route path="/menu" component={MenuPage} />
              <Route path="/contact" component={ContactPage} />
            </Switch>
          </div>
      </Router>
    ); 
  }
}

export default App;
