import React, { Component} from 'react'
import info from './info/info'
import "./style.css";


export class About2 extends Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid about-bg2" id="about">
        <div className="container text-center">
          <h1 className="display-4 text-light">{info.description2}</h1>
        </div>
      </div>
    )
  }
}
