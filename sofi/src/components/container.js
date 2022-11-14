import 'bootstrap/dist/css/bootstrap.min.css';
import  '../css/styles.css'
import Ferrum from '../img/ferrum.png'
import Delta from '../img/delta.png'
import Negativo from '../img/Logo-Negativo.png'
import ips from '../img/logo_ips.png'
import React from "react";
export default function Containers(){
    return(
      <div className="container-md">
        <h3>Marcas con las trabajamos</h3>
        <div className="container">
          <div className="row">
            <div className="col">
              <img className="img " src={Ferrum} alt=""/>
            </div>
            <div className="col">
              <img className="img " src={Delta} alt=""/>
            </div>
            <div className="col">
              <img className="img " src={Negativo} alt=""/>
            </div>
            <div className="col">
              <img className="img " src={ips} alt=""/>
            </div>
          </div>
        </div>
      </div>
    )
}