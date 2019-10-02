import React, { Component} from 'react'
import { CreditPopup } from './Popups'
import "./intro.css"

export class Intro extends Component{
  render() {
    return (
      <div className="d-flex align-items-end intro-bg" id="intro">
          <div class="ml-auto p-2 bd-highlight">
            <CreditPopup credit={<a id="photoCredit" href='https://unsplash.com/@charles_forerunner'>Photo by Charles Forerunner on Unsplash</a>}/>
          </div>
      </div>
    )
  }
}
