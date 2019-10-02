import React, { Component} from 'react'
import "./about.css";


export class About3 extends Component {
  render() {
    return (
      <div className="d-flex align-items-end about-bg3" id="about">
        <div className="flex-fill align-self-center">
        <div className="container text-center">
            <h1 className="display-4 text-light">Achieve your goals with the help of our experienced team</h1>
          </div>
        </div>
        <div className="ml-auto p-2 bd-highlight">
          <a id="photoCredit" href='https://unsplash.com/@helloquence'>
            <small>Photo by Helloquence</small>
          </a>
        </div>
      </div>
    )
  }
}
