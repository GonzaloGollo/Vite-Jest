import React from "react";
import "./Categorias.css";
import CardCategoria from "./CardCategoria";
import { useState, useEffect } from "react";

const Categorias = () => {
  const [producto, setProducto] = useState([]);

  const getProductos = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/photos/");
    const data = await res.json();
    setProducto(data);
  };

  useEffect(() => {
    getProductos();
  }, []);



  return (
    <div className="segmento-categorias">
      <div className="txt-titulo-servicio">Busca por tipo de servicio</div>
      <div className="categorias">
        {producto.length ? (
          producto.slice(0, 6).map((productos) => (
            <CardCategoria title={productos.title} url={productos.url} />
          ))
        ) : (
          <h3> No encontramos productos para recomendar </h3>
        )}
      </div>
    </div>
  );
};

export default Categorias;


// /   const getRandomProducts = () => {
//     //     const randomProducts = [...producto]
//     //       .sort(() => Math.random() - 0.5)
//     //       .slice(0, 6);
//     //     return randomProducts;
//     //   };
    
//     //   const productosAleatorios = getRandomProducts();