import 'bootstrap/dist/css/bootstrap.min.css';
import  '../css/styles.css'
import ByN from '../img/logo_byn.png'
import Tel from '../img/tel.png'
import React from "react";

export default function Footers(){
  return (
    <footer style={{backgroundColor: 'rgba(48,48,48,255)', color: 'white'}} className="d-flex flex-wrap text-bg-dark row row-cols-1 row-cols-sm-2 row-cols-md-5  border-top ">
      <div className="col-md-4 d-flex align-items-center">
        <img src={ByN} className="footerimg" alt="..."/>
      </div>
      <div className="col-md-4 justify-content-end d-flex">
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><img className="fimg"src="https://www.ternascodearagon.es/wp-content/uploads/2021/11/toppng.com-white-location-icon-png-location-logo-png-white-696x872-1.png" alt=".." /> Beiro 3300 Villa Del Parque</li>
            <li className="nav-item mb-2"> <img className="fimg"src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_300,h_211/https://www.diez41.es/wp-content/uploads/2020/09/pngkey.com-email-icon-white-png-9311379-300x211.png" alt=".."/> contacto@sanitarioscampana.com.ar </li>
          </ul>
      </div>
  
      <div className="nav col-md-4  d-flex">
          <ul className="nav flex-column">
            <li className="nav-item mb-2"> <img src={Tel} alt="..."/><a className="celu" href="/#"> 4503-6015</a></li>
          </ul>
      </div>
    </footer>
  )
}