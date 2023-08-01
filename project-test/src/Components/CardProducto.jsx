import React from "react";
import { useContext } from "react";
import { ContextGlobal } from "./utils/global.context";

const CardProducto = ({ title, url, id }) => {
  const { state } = useContext(ContextGlobal);

  return (
    <>
      <div>CardProducto</div>
      <div className="CardBody">
        <img className="ImgCard" src={url} alt="Foto producto" />
        <h3>{title}</h3>
        <p>{id}</p>
      </div>
    </>
  );
};

export default CardProducto;
