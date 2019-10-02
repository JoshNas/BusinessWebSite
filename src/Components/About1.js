import React, { Component} from 'react'
import "./about.css";


export class About1 extends Component {
  render() {
    return (
      <div className="d-flex align-items-end about-bg" id="intro">
        <div class="flex-fill align-self-center">
        <div className="container text-center">
            <h1 className="display-4 text-light">Work with us for inovative solutions for everyday problems</h1>
          </div>
        </div>
        <div class="ml-auto p-2 bd-highlight">
          <a id="photoCredit" href='https://unsplash.com/@pavement_special'>
            <small>Photo by Riccardo Annandale</small>
          </a>
        </div>
      </div>
    )
  }
}
