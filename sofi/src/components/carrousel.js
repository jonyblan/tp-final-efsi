import 'bootstrap/dist/css/bootstrap.min.css';
import  '../css/styles.css'
import Slider from '../img/slider.png'
import React from "react";
export default function Carrousel(){
    return(
        <div>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={Slider} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Elija Sanitarios Campana para su hogar</h5>
                      <p>Lo que Ud. necesita</p>
                    </div>
                  </div>
                  <div className="carousel-item active">
                    <img src={Slider} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Elija Sanitarios Campana para su hogar</h5>
                      <p>Lo que Ud. necesita</p>
                    </div>
                  </div>
                  <div className="carousel-item active">
                    <img src={Slider} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Elija Sanitarios Campana para su hogar</h5>
                      <p>Lo que Ud. necesita</p>
                    </div>
                  </div>
                  <div className="carousel-item active">
                    <img src={Slider} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Elija Sanitarios Campana para su hogar</h5>
                      <p>Lo que Ud. necesita</p>
                    </div>
                  </div>
                  
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
        </div>
    );
}