import React from "react";
import CardProducto from "./CardProducto";
import { useState, useEffect } from "react";
import "./Recomendaciones.css"
 

const Recomendaciones = () => {

const [producto, setProducto] = useState([]);

  const getProductos = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/photos/");
    const data = await res.json();
    setProducto(data);
  };

  useEffect(() => {
    getProductos();
  }, []);

  const getRandomProducts = () => {
    const randomProducts = [...producto].sort(() => Math.random() - 0.5).slice(0, 10);
    return randomProducts;
  };

  const productosAleatorios = getRandomProducts();

  return (
    <div className="segmento-recomendaciones">
    <h3 className="txt-titulo-recomendaciones">Recomendaciones    / Trae categorias de api</h3>
      <div className="Recomendaciones">
      
      {productosAleatorios.length ? (
        productosAleatorios.map((productos) => (
          <CardProducto className="card-body"
            title={productos.title}
            url={productos.url}
            id={productos.id}
          />
        ))
      ) : (
        <h3> No encontramos productos para recomendar </h3>
      )}
      </div>
    </div>
  );
};

export default Recomendaciones;
