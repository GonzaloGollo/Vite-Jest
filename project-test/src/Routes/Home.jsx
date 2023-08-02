import React from "react";
import Buscador from "../Components/Buscador";
import Categorias from "../Components/Categorias";
import Recomendaciones from "../Components/Recomendaciones";

const Home = () => {
  return (
    <>
      {/* <p>Click on the Vite and React logos to learn more</p> */}
      <Buscador />
      <Categorias />
      <Recomendaciones />
    </>
  );
};

export default Home;
