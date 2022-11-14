import '../css/styles.css'
import ListadoContext from '../context/index'
import { useContext } from 'react';
import React from "react";

export default function CardCarrito({ props }) {
    const Lista = useContext(ListadoContext)
    return (
        <div className="card-mini ">
            <div class="container text-center">
                <div class="row">
                    <div className='col'>
                        <img src={props.foto} className="card-mini-img-top" alt="..." />
                    </div>
                    <div class="col">
                        <p className="card-mini-title">{props.nombre}</p>
                    </div>
                    <div class="col">
                        <p >{props.descripcion}</p>
                    </div>
                    <div class="col">
                        <p >${props.precio}</p>
                    </div>
                    <div class='col'>
                        {
                            Lista.lista.includes(props) ? <a className='deleteBtn-mini' onClick={() => Lista.eliminar_item(props.id)} >Eliminar </a> : <a className='btn-style-mini' onClick={() => Lista.agregar_item(props)}>Agregar al carrito</a>
                        }
                    </div>
                </div>
            </div>
            <div className="card-mini-body">
            </div>
        </div>
    );
}