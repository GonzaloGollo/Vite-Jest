import React from "react";
import Buscador from "../Components/Buscador/Buscador";
import Categorias from "../Components/Categorias";
import Recomendaciones from "../Components/Recomendaciones/Recomendaciones";
import ListadoProductos from "../Components/ListadoProductos";

const Home = () => {
  return (
    <>
      {/* <p>Click on the Vite and React logos to learn more</p> */}
      <Buscador/>
      <Categorias />
      <Recomendaciones />
      <ListadoProductos/>
    </>
  );
};

export default Home;
