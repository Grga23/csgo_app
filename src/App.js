import './App.css';
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/Homepage/HomePage.component'
import Navigation from './components/Navigation/Navigation.js';
import TournamentsPage from './pages/Tournaments/TournamentsPage.component.jsx'
import 'rsuite/dist/styles/rsuite-dark.css';
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'


const initialState = {}


class App extends Component {
  constructor() {
    super();
    this.state = initialState; 
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path ="/tournaments" component={TournamentsPage} />
        {/* <TournamentList/> */}
            {/* <About />
            <Contact /> 
          <Fixtures />
          <Results />
          <Footer /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
