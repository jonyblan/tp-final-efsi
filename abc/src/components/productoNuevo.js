import React from "react";
import Navbar from '../components/navbar'
import Footers from '../components/footer'
import inicioSesion from '../components/inicioSesion'
import { useState } from 'react';
import Modal from '../components/carrito';
import ListadoContext from '../context';
import { Button } from 'bootstrap';
import Productos from '../Productos'
import { redirect } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css'
import Logo from '../img/Logo.png'
import { Link, Outlet } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function ProductoNuevo (){
    const [nombre, setNombre] = useState("")
    const [descripcion, setDesc] = useState("")
    const [imagen, setImg] = useState("")
    const [precio, setPrecio] = useState(-1)

    const algo = () => {
        if(nombre != "" && descripcion != "" && imagen != "" && precio != -1){
            const largo = Productos.length
            Productos.push({"nombre":nombre, "descripcion":descripcion, "imagen":imagen, "precio":precio})
        }
    }
    return(
        <div>
            <h1>Nuevo Producto</h1>
            <h4>Ingrese los datos por favor</h4>
            <form>
                <ul>
                    <label id="nombre">Nombre </label>
                    <input type="text" name="nombre" for="nombre" className="u-full-width" placeholder="Nombre" onChange={event => setNombre(event.target.value)}></input>
                    <label id="descripcion">descripcion </label>
                    <input type="text" name="descripcion" for="descripcion" className="u-full-width" placeholder="Apellido" onChange={event => setDesc(event.target.value)}></input>
                    <label id="imagen">Url Imagen </label>
                    <input type="text" name="imagen" for="imagen" className="u-full-width" placeholder="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.memegenerator.es%2Fmeme%2F31927773&psig=AOvVaw3ldPLkmbopgV_FW84JIVRF&ust=1668684431597000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCIjbuInMsvsCFQAAAAAdAAAAABAD" onChange={event => setImg(event.target.value)}></input>
                    <label id="precio">precio: $ </label>
                    <input type="number" name="precio" for="precio" min="1" className="u-full-width" placeholder="2500" onChange={event => setPrecio(event.target.value)}></input>
                    
                </ul>
            </form>
            <a onClick={algo}>enviar</a>
            <Link to="/#" >Volver</Link>
        </div>
    )
}