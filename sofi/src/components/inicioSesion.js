import React from "react";
import  '../css/styles.css'
import { RiCloseLine } from "react-icons/ri";

const inicioSesion = ({ setIsOpen }) => {
    <>
    <div className="darkBG" onClick={() => setIsOpen(false)} />
        <div className={-"centered"}>
            <div className={"modal"}>
            <div className={"modalHeader"}>
                <h5 className={"heading"}>Dialog</h5>
            </div>
            <button className={"closeBtn"} onClick={() => setIsOpen(false)}>
                <RiCloseLine style={{ marginBottom: "-3px" }} />
            </button>
            <div className={"modalContent"}>
                Are you sure you want to delete the item?
            </div>
            return <h1>Hello Modal</h1>;
        </div>
    </div>
    </>
};

export default inicioSesion;