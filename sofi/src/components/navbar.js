
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css'
import Logo from '../img/Logo.png'
import { Link, Outlet } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import React from "react";
import inicioSesion from "./inicioSesion";
import { useState } from 'react';


export default function Navbar({props}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="Container-sm">
      <nav className="navbar navbar-expand-lg bg-light">
        <Container className="Container">
          <a className="navbar-brand" href="https://www.sanitarioscampana.com.ar/" ><img src={Logo} className="navbarimg" alt="" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Container >
            <nav className="collapse navbar-collapse" id="navbarSupportedConten">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" to="/inicioSesion" >Iniciar Sesion</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/" >Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/quienessomos" params={props.listado} >Quienes somos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/productos" params={props.listado} >Productos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/contacto" params={props.listado} >Contacto</Link>
              </li>
              <li onClick={()=> props.setIsOpen(true)}>
                <FaShoppingCart   size={30} ></FaShoppingCart>
              </li>
            </ul>
            <Outlet />
            </nav>
          </Container>
        </Container>
      </nav>
    </header>
  );
}