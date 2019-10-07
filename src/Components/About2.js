import React, { Component} from 'react'
import "./about.css";


export class About2 extends Component {
  render() {
    return (
      <div className="d-flex align-items-end about-bg2" id="intro">
        <div className="flex-fill align-self-center">
        <div className="container text-center">
            <h1 className="display-4 aboutText">Build your business with modern design and concepts</h1>
          </div>
        </div>
        <div className="ml-auto p-2 bd-highlight">
          <small className="creditText">Photo by Helloquence</small>
        </div>
      </div>
    )
  }
}
