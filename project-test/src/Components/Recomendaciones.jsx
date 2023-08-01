import React from "react";
import { ContextGlobal } from "../Components/utils/global.context";
import { useContext } from "react";
import CardProducto from "./CardProducto";

const Recomendaciones = () => {
  const { producto } = useContext(ContextGlobal);
  return (
    <>
      <div>Recomendaciones</div>

      {producto.length ? (
        producto.map((productos) => (
          <CardProducto
            title={productos.title}
            url={productos.url}
            id={productos.id}
          />
        ))
      ) : (
        <h3> No encontramos productos para recomendar </h3>
      )}
    </>
  );
};

export default Recomendaciones;
