import '../css/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/navbar';
import Footers from '../components/footer';
import Carrousel from '../components/carrousel';
import Containers from '../components/container'
import ListaProductos from '../components/listadoProductos';
import Modal from '../components/carrito';
import {  useState } from 'react';
import ListadoContext from '../context';
import React from "react";
 function Inicio({listado}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <Navbar props={{ isOpen, setIsOpen, listado }}></Navbar>
      <Carrousel></Carrousel>
      <ListadoContext.Provider value={listado}>
        <div className='container'>
          <div>
            <ListaProductos></ListaProductos>
          </div>
          <hr className="mt-3 mb-3" />
          <div>
            {isOpen && <Modal props={{setIsOpen, listado}} />}
            <Containers></Containers>
          </div>
        </div>
      </ListadoContext.Provider>
      <Footers></Footers>

    </div>
  );
}
export default Inicio

