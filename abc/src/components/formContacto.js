import React from "react";
export default function FormContacto (){
    return(
        <form>
            <label>Nombre </label>
            <input type="text" name="nombre" className="u-full-width" placeholder="Nombre"  ></input>
            <label>Apellido </label>
            <input type="text" name="Apellido" className="u-full-width" placeholder="Apellido"  ></input>
            <label>Email </label>
            <input type="email" name="Email" className="u-full-width" placeholder="Email"  ></input>
            <textarea name="textarea" placeholder="Descripcion..."></textarea>
        </form>
    )
}