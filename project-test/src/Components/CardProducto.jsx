import React from "react";
import "./CardProducto.css";
import { Link } from "react-router-dom";
// import { useContext } from "react";
// import { ContextGlobal } from "./utils/global.context";

const CardProducto = ({ title, url, id, descripcion }) => {
  //   const { state } = useContext(ContextGlobal);

  return (
    <>
      <Link to={"/producto/" + id}>
        <div className="card-body">
          <img className="ImgCard" src={url} alt="Foto producto" />
          <div className="texto-card">
            <h3 className="titulo-card-producto">{title}</h3>
            <p className="descripcion-card">{descripcion}</p>
            <p className="precio">${id}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CardProducto;
