import Navbar from '../components/navbar'
import Footers from '../components/footer'
import FormContacto from '../components/formContacto'
import { useState } from 'react';
import Modal from '../components/carrito';
import ListadoContext from '../context';
import React from "react";


export default function Contacto({ listado }) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="App">
            <Navbar props={{ isOpen, setIsOpen }}></Navbar>
            <ListadoContext.Provider value={listado}>
                <div className='Container'>
                    <FormContacto></FormContacto>
                    {isOpen && <Modal props={{ setIsOpen, listado }} />}
                </div>
            </ListadoContext.Provider>
            <Footers></Footers>
        </div>
    )
}