import React, { Component} from 'react'
import info from './info/info'
import "./style.css";


export class About3 extends Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid about-bg3" id="about">
        <div className="container text-center">
          <h1 className="display-4 text-light">{info.description3}</h1>
        </div>
      </div>
    )
  }
}