import Navbar from '../components/navbar'
import Footers from '../components/footer'
import ProductoNuevo from '../components/productoNuevo'
import { useState } from 'react';
import Modal from '../components/carrito';
import ListadoContext from '../context';
import React from "react";


export default function NuevoProducto({listado}) {
  
  const [isOpen, setIsOpen] = useState(false);
  console.log(listado)
  return (
    <div className="App">
      <Navbar props={{ isOpen, setIsOpen }}></Navbar>

      <ListadoContext.Provider value={listado}>
        <div className='Container'>
          <ProductoNuevo></ProductoNuevo>
          {isOpen && <Modal props={{setIsOpen, listado}} />}

        </div>
      </ListadoContext.Provider>
      <Footers></Footers>

    </div>
  )
}