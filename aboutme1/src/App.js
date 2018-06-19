import React, { Component } from 'react';
import './App.css';
import LandingPage from './pages/landingPages/landingPages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './common/Header/header';
import Footer from './common/Footer/footer';
import Contact from './pages/Contact/Contact';
import Interests from './pages/Interests/Interests';
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Header />
            <Switch>
              <Route exact path='/' component={LandingPage} />
              <Route exact path='/Contact' component={Contact} />
              <Route exact path='/Interests' component={Interests} />
            </Switch>
            <Footer/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
