import React from "react";
import CardProducto from "./CardProducto";
import { useState, useEffect } from "react";
import "./ListadoProductos.css";

const ListadoProductos = () => {
  // const [producto, setProducto] = useState([]);

  //   const getProductos = async () => {
  //     const res = await fetch("https://jsonplaceholder.typicode.com/photos/");
  //     const data = await res.json();
  //     setProducto(data);
  //   };

  //   useEffect(() => {
  //     getProductos();
  //   }, []);

  const productos = [
    {
      name: "Open Space",
      descripcion:
        "El lugar ideal para que trabajes solo con tu equipo. Comodidad y Espacio Asegurados, Mobiliario de Última generación. ",
      src: "/images/338439244_197450542992008_6106634537243693748_n.jpg",
    },
    {
      name: "Oficina privada",
      descripcion:
        "El lugar ideal para que trabajes solo con tu equipo. Comodidad y Espacio Asegurados, Mobiliario de Última generación. ",
      src: "/images/oficinaprivada.jpg",
    },
    {
      name: "Salas de reunión ",
      descripcion:
        "El lugar ideal para que trabajes solo con tu equipo. Comodidad y Espacio Asegurados, Mobiliario de Última generación. ",
      src: "/images/Sala de reunion2.jpg",
    },
    {
      name: "Mobiliario",
      descripcion:
        "El lugar ideal para que trabajes solo con tu equipo. Comodidad y Espacio Asegurados, Mobiliario de Última generación. ",
      src: "/images/mobiliario.jpg",
    },
    {
      name: "Lockers",
      descripcion:
        "El lugar ideal para que trabajes solo con tu equipo. Comodidad y Espacio Asegurados, Mobiliario de Última generación. ",
      src: "/images/Lockers.jpg",
    },
    {
      name: "Domicilio Fiscal y Jurídic",
      descripcion:
        "El lugar ideal para que trabajes solo con tu equipo. Comodidad y Espacio Asegurados, Mobiliario de Última generación. ",
      src: "/images/Domicilio Fiscal y Jurídic.jpg",
    },
    {
      name: "Terraza ",
      descripcion:
        "El lugar ideal para que trabajes solo con tu equipo. Comodidad y Espacio Asegurados, Mobiliario de Última generación. ",
      src: "/images/terraza2.jpg",
    },
    {
      name: "Escritorio dedicado",
      descripcion:
        "El lugar ideal para que trabajes solo con tu equipo. Comodidad y Espacio Asegurados, Mobiliario de Última generación. ",
      src: "/images/Terraza.jpg",
    },
    {
      name: "Oficina de planta completa",
      descripcion:
        "El lugar ideal para que trabajes solo con tu equipo. Comodidad y Espacio Asegurados, Mobiliario de Última generación. ",
      src: "/images/Oficina de planta completa.jpg",
    },
    {
      name: "Oficina de planta completa",
      descripcion:
        "El lugar ideal para que trabajes solo con tu equipo. Comodidad y Espacio Asegurados, Mobiliario de Última generación. ",
      src: "/images/Oficina de planta completa.jpg",
    },
  ];

  const getRandomProducts = () => {
    const randomProducts = [...productos]
      .sort(() => Math.random() - 0.5)
      .slice(0, 10);
    return randomProducts;
  };

  const productosAleatorios = getRandomProducts();

  return (
    <div className="segmento-listado-productos">
      <h3 className="txt-titulo-listado-productos"></h3>

      <div className="listado-productos grid-container">
        {productosAleatorios.length ? (
          productosAleatorios.map((producto, index) => (
            <CardProducto
              key={producto.id}
              className="card-body item-grid"
              title={producto.name}
              descripcion={producto.descripcion}
              url={producto.src} // Use the index to access the corresponding image URL
              id={producto.id}
            />
          ))
        ) : (
          <h3> No encontramos productos para recomendar </h3>
        )}
      </div>
    </div>
  );
};

export default ListadoProductos;
