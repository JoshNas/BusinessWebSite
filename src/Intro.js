import React, { Component} from 'react'
import info from './info/info'
import logo from './img/logo.png'
import "./style.css"


export class Intro extends Component{
  render() {
    return (
      <div className="jumbotron jumbotron-fluid intro-bg" id="intro"></div>
    )
  }
}
