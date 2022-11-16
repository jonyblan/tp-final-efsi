import Navbar from '../components/navbar'
import Footers from '../components/footer'
import Sesionn from '../components/inicioSesion'
import { useState } from 'react';
import Modal from '../components/carrito';
import ListadoContext from '../context';
import React from "react";
import { Button } from 'bootstrap';
import usuarios from '../usuarios'


export default function Sesion({ listado }) {

    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="App">
        <Navbar props={{ isOpen, setIsOpen }}></Navbar>
  
        <ListadoContext.Provider value={listado}>
          <div className='Container'>
            <Sesionn></Sesionn>
            {isOpen && <Modal props={{setIsOpen, listado}} />}
  
          </div>
        </ListadoContext.Provider>
        <Footers></Footers>
      </div>
    )
  }