import React from "react";
import "./Buscador.css";
import { MdSearch } from "react-icons/md";
const Buscador = () => {
  return (
    <div className="segmento-buscador">
      <div className="encontra">Encontra</div>
      <div className="boton-buscador">
      <div className="buscar-por">Localidad </div>
      <div className="buscar-por">|</div>
      <div className=" buscar-por">Fecha</div>
      <div className="buscar-por">|</div>
      <div className=" buscar-por" >Precio</div>
      <div className="buscar-por">|</div>
      <div className="icono-lupa" >
      <MdSearch style={{ color: "grey", fontSize: "30px", paddingLeft:"8px" }}/>
      </div>
      </div>
    </div>
  );
};

export default Buscador;
