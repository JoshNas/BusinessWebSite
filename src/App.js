import React, { Component } from 'react'
import { Navbar } from './Navbar'
import { Intro } from './Intro'
import { About } from './About'
import { Contact } from './Contact'
import { Footer } from './Footer'


export class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Intro />
        <About />
        <Contact />
        <Footer />
      </div>

    )
  }
}
