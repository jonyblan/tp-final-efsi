import Navbar from '../components/navbar'
import Footers from '../components/footer'
import { useState } from 'react';
import Modal from '../components/carrito';
import ListadoContext from '../context';
import React from "react";
export default function QuienesSomos({listado}){


    const [isOpen, setIsOpen] = useState(false);
    return(
        <div className="App">
        <Navbar props={{isOpen, setIsOpen}}></Navbar>
        <ListadoContext.Provider value={listado}>
        <div>
            <h1>Quienes somos</h1>
            {isOpen && <Modal props={{setIsOpen, listado}} />}

            <div style={{ margin: "60px" }}>			
				<p style={{ margin: "20px" }}>Sanitarios Campana es una marca que nació en 1984 con el principal objetivo de cubrir la demanda en el suministro de equipos y servicios dedicados a la industria de hidrocarburos y afines. Nuestra marca se ha venido fortaleciendo durante todos estos años como confiabilidad y fe de trabajo a cada uno de los proyectos que hemos trabajado, dejando una impronta efectiva y de resultados en cada una de las empresas con quienes desarrollamos proyectos.</p>
                <p style={{ margin: "20px" }}>En Sanitarios Campana somos una marca que se enfoca en prestar soluciones únicas y servicios en el mercado petrolero, de ingeniería y energético, aportando soluciones propias de la mano con nuestros aliados exclusivos de marcas internacionales de gran prestigio,&nbsp;las cuales, promocionamos a través de estrategias de mercadeo, &nbsp;publicidad y contacto directo con el cliente.</p>
                <p style={{ margin: "20px" }}>Nuestro equipo de trabajo está conformado por un personal altamente calificado, multidisciplinario y profesional, orientado a garantizar una atención de calidad en las diversas áreas de la industria de los hidrocarburos.</p>
                <p style={{ margin: "20px" }}>Ofrecemos también al sector petrolero el desarrollo de ingeniería y procura asociado a la ejecución de “Proyectos Llave en Mano (IPC)” altamente demandados en la adecuación o mejoras de plantas de distribución de combustibles, terminales de almacenamiento, estaciones de flujo, poliductos, muelles, entre otros. Asimismo, nos caracterizamos en ofrecer además de soluciones y productos de buena calidad, prestar una asesoría especializada para el desarrollo de proyectos, en la instalación de nuestros sistemas y equipos, y soporte de mantenimiento, siempre a la vanguardia de los nuevos desafíos generacionales para afrontar con una respuesta oportuna la solución inmediata a cualquier requerimiento.</p>
			</div>

            <ul>
				<li style={{ margin: "20px" }}><h2>Misión</h2>
                    <p>Ofrecer un resultado óptimo con servicios y productos de calidad para los mercados Petrolero, gasífero y energético, innovando y transformando ideas para la promoción de soluciones integrales y capacitando nuestro valioso capital humano para impulsar la rentabilidad de la organización.</p>
                </li>
				<li style={{ margin: "20px" }}><h2>Visión</h2>
                    <p>Ser reconocida como una empresa líder innovando en servicios y soluciones de productos de alta calidad en los sectores hidrocarburo y energético, otorgando un apoyo inmediato a través de la innovación para todos nuestros clientes, demostrando una solidez con tecnología de punta para impulsar nuestro crecimiento internacional.</p>
                </li>
			</ul>
        
        </div>
        </ListadoContext.Provider>
      <Footers></Footers>
    </div>
    )
}