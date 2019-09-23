import React  from 'react'
import ModalImage from "react-modal-image";
import info from './info/info'
import "./style.css";
import { About1 } from './About1'
import { About2 } from './About2'
import { About3 } from './About3'


export const About = () => (
  <div className="jumbotron jumbotron-fluid" id="about">
    <div id="carousel-example-2" class="carousel slide carousel-fade z-depth-1-half" data-ride="carousel">

      <ol class="carousel-indicators">
        <li data-target="#carousel-example-2" data-slide-to="0" class="active"></li>
        <li data-target="#carousel-example-2" data-slide-to="1"></li>
        <li data-target="#carousel-example-2" data-slide-to="2"></li>
      </ol>

      <div class="carousel-inner" role="listbox">
        <div class="carousel-item active">
        <div class="view">
          <About1/>
          <div class="mask rgba-black-light"></div>
        </div>
        </div>
        <div class="carousel-item">
          <div class="view">
            <About2/>
            <div class="mask rgba-black-light"></div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="view">
            <About3/>
            <div class="mask rgba-black-light"></div>
          </div>
        </div>
      </div>

      <a class="carousel-control-prev" href="#carousel-example-2" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carousel-example-2" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>

    </div>



  </div>



)