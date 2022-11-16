import Card from "./card"
import Productos from "../Productos"
import { useContext } from "react"
import ListadoContext from "../context"
import React from "react";
export default function ListaProductos(){
    const Lista = useContext(ListadoContext)
    return(
        <div>
            <div style={{marginTop: 1.5}}>
                <h3>Productos destacados</h3>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">     
            {Productos.map(p => (
                <Card key={p.id} props={p}></Card>
            ))}
            </div>
        </div>
    )
}