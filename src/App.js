import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Nav } from './Components/Navbar'
import { Intro } from './Components/Intro'
import { About } from './Components/About'
import { Contact } from './Components/Contact'
import { Footer } from './Components/Footer'


export class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Intro />
              <About />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    );
  }
}
