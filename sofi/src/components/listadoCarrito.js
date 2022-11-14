import Card from "./card"
import Productos from "../Productos"
import { useContext } from "react"
import ListadoContext from "../context"
import CardCarrito from "./cardCarrito"
import React from "react";
export default function ListaCarrito(){
    const Lista = useContext(ListadoContext)
    return(
        <div>

            <div className="lista">     
            {Lista.lista.map(p => (
                <CardCarrito key={p.id} props={p}></CardCarrito>
            ))}
            </div>
        </div>
    )
}