import React, { Component} from 'react'
import "./about.css";


export class About2 extends Component {
  render() {
    return (
      <div className="d-flex align-items-end about-bg2" id="intro">
        <div class="flex-fill align-self-center">
        <div className="container text-center">
            <h1 className="display-4 text-light">Build your business with modern design and concepts</h1>
          </div>
        </div>
        <div class="ml-auto p-2 bd-highlight">
        <a id="photoCredit" href='https://unsplash.com/@helloquence'>
          <small>Photo by Helloquence</small>
        </a>
        </div>
      </div>
    )
  }
}
