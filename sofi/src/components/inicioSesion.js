import Navbar from '../components/navbar'
import Footers from '../components/footer'
import inicioSesion from '../components/inicioSesion'
import { useState } from 'react';
import Modal from '../components/carrito';
import ListadoContext from '../context';
import React from "react";
import { Button } from 'bootstrap';
import usuarios from '../usuarios'


export default function Sesionn({props}) {
    const [user, setUser] = useState("")
    const [pass, setPass] = useState("nop")
    const [id, changeId] = useState(0)
    const [rol, changeRol] = useState("")
    const entrar = (id) =>{
        console.log(usuarios[id].rol)
        changeRol(usuarios[id].rol)
        if(rol == "admin"){
            console.log("admin")
        }
        else if(rol == "user"){
            console.log("user")
        }
        else{
            console.log("Error en components/inicioSesion/Sesionn/entrar: No deberia no tener ninguno de los roles anteriores")
        }
    }

    const algo = () => {
        usuarios.map((nombre) => {
            if(nombre.user == user){
                if(nombre.pass == pass){
                    entrar(id)
                }
            }
            changeId(id+1)
        })
        console.log("Usuario y/o contraseña incorrectos")
    }
    return (
        <div>
            <form>
                <label id="user">User </label>
                <input for="user" type="text" name="user" className="u-full-width" placeholder="John Doe" onChange={event => setUser(event.target.value)}></input>
                <label id="pass">Password </label>
                <input for="pass" type="password" name="contra" className="u-full-width" placeholder="********" onChange={event => setPass(event.target.value)}></input>
            </form>
            <a onClick={algo}>enviar</a>
        </div>
    )
  }

  /*
  <>
        <div>
            <form>
                <label id="user">User </label>
                <input for="user" type="text" name="nombre" className="u-full-width" placeholder="John Doe" onChange={setUser(this)}></input>
                <label id="pass">Password </label>
                <input for="pass" type="password" name="contra" className="u-full-width" placeholder="********" onChange={setPass(this)}></input>
            </form>
        </div>
        </>*/