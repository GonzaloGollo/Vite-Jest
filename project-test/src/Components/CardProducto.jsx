import React from "react";
import "./CardProducto.css"
// import { useContext } from "react";
// import { ContextGlobal } from "./utils/global.context";

const CardProducto = ({ title, url, id }) => {
//   const { state } = useContext(ContextGlobal);

  return (
    <>
      <div className="card-body">
        <img className="ImgCard" src={url} alt="Foto producto" />
        <div className="texto-card">
        <h3>{title}</h3>
        <p>{id}</p>
        </div>
      </div>
    </>
  );
};

export default CardProducto;
