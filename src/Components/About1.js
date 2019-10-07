import React, { Component} from 'react'
import "./about.css";


export class About1 extends Component {
  render() {
    return (
      <div className="d-flex align-items-end about-bg" id="intro">
        <div className="flex-fill align-self-center">
        <div className="container text-center">
            <h1 className="display-4 aboutText">Work with us for inovative solutions for everyday problems</h1>
          </div>
        </div>
        <div className="ml-auto p-2 bd-highlight">
          <small className="creditText">Photo by Riccardo Annandale</small>
        </div>
      </div>
    )
  }
}
