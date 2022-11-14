import React from "react";
import styles from "./Modal.module.css";
import { RiCloseLine } from "react-icons/ri";
import { useContext } from "react";
import ListadoContext from "../context";
import ListaCarrito from "./listadoCarrito";
import 'bootstrap/dist/css/bootstrap.min.css';

const Modal = ({ props }) => {
  const Lista = useContext(ListadoContext)
  const precios = Lista.lista.map(p => p.precio)
  let precio_final = 0
  precios.forEach(p => {
    precio_final += p
  });
  return (
    <>
      <div className={styles.darkBG} onClick={() => props.setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Carrito</h5>
          </div>
          <h5 className={styles.heading}>Precio final: {precio_final}</h5>
          <button className={styles.closeBtn} onClick={() => props.setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className={styles.modalContent}>
            <ListaCarrito></ListaCarrito>
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <button className={styles.cancelBtn} onClick={() => props.setIsOpen(false)}>
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;