import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css'
import ListadoContext from '../context/index'
import { useContext } from 'react';
import React from "react";
import { useState } from "react";

export default function Card({props}) {
    const [cant, setCant] = useState(0)
    const Lista = useContext(ListadoContext)
    const agregar = () => {
        Lista.agregar_item(props)
        setCant(cant+1)
    }
    const restar = () => {
        if(cant > 0){
            Lista.eliminar_item(props.id)
            setCant(cant-1)
        }
    }
    return (
        <div className="col">
            <div className="card ">
                <img src={props.foto} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.nombre}</h5>
                    <p className="card-text">{props.descripcion}</p>
                    <p className="card-text">${props.precio}</p>
                    {
                        <>
                        <a style={{fontSize: '50px', color:'blue'}} onClick={restar} >-</a>
                        <span style={{fontSize: '30px', margin: '20px'}}>{cant}</span>
                        <a style={{fontSize: '50px', color: 'blue'}} onClick={agregar}>+</a>
                        </>
                    }
                    
                </div>
            </div>
        </div>
    );
}