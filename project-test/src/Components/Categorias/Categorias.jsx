import React from "react";
import "./Categorias.css";
import "./CardCategoria.css";
import CardCategoria from "./CardCategoria";
import { useState, useEffect } from "react";
import {
  HiOutlineBuildingOffice2,
  HiOutlineBuildingStorefront,
  HiOutlineHome,
  HiOutlinePrinter,
  HiOutlineFolder,
  HiOutlineInboxStack,
  HiOutlineTv,
  HiMiniComputerDesktop,
} from "react-icons/hi2";
import { GiOfficeChair } from "react-icons/gi";

const Categorias = () => {


  return (
    <div className="segmento-categorias">
      {/* <h3 className="txt-titulo-servicio">Busca por tipo de servicio</h3> */}

      <div className="card-categoria">
        <div className="fondo-icono caja-blanca-sombreada">
          <HiOutlineBuildingOffice2
            style={{ color: "grey", fontSize: "40px" }}
          />
        </div>
        <div className="nombre-icono-categoria">Oficina Privada</div>
      </div>

      <div className="card-categoria">
        <div className="fondo-icono caja-blanca-sombreada">
          <HiOutlineBuildingOffice2
            style={{ color: "grey", fontSize: "40px" }}
          />
        </div>
        <div className="nombre-icono-categoria">Oficina abierta</div>
      </div>

      <div className="card-categoria">
        <div className="fondo-icono caja-blanca-sombreada">
          <HiOutlineHome style={{ color: "grey", fontSize: "40px" }} />
        </div>
        <div className="nombre-icono-categoria">Office house</div>
      </div>
{/* 
      <div className="card-categoria">
        <div className="fondo-icono caja-blanca-sombreada">
          <GiOfficeChair style={{ color: "grey", fontSize: "40px" }} />
        </div>
        <div className="nombre-icono-categoria">Puesto de Trabajo</div>
      </div> */}
{/* 
      <div className="card-categoria">
        <div className="fondo-icono caja-blanca-sombreada">
          <HiOutlineBuildingStorefront
            style={{ color: "grey", fontSize: "40px" }}
          />
        </div>
        <div className="nombre-icono-categoria">Store Point</div>
      </div>

      <div className="card-categoria">
        <div className="fondo-icono caja-blanca-sombreada">
          <HiOutlineTv style={{ color: "grey", fontSize: "40px" }} />
        </div>
        <div className="nombre-icono-categoria">Soporte Tecnico</div>
      </div>

      <div className="card-categoria">
        <div className="fondo-icono caja-blanca-sombreada">
          <HiMiniComputerDesktop style={{ color: "grey", fontSize: "40px" }} />
        </div>
        <div className="nombre-icono-categoria">Material tecnico</div>
      </div> */}

    </div>
  );
};
export default Categorias;

/////////////////////////////////////////
  // const [producto, setProducto] = useState([]);

  // const getProductos = async () => {
  //   const res = await fetch("https://jsonplaceholder.typicode.com/photos/");
  //   const data = await res.json();
  //   setProducto(data);
  // };
  // useEffect(() => {
  //   getProductos();
  // }, []);

  // const categorias = [
  //   {
  //     nombre: "Oficina abierta",
  //     icono: (
  //       <HiOutlineBuildingOffice2 style={{ color: "grey", fontSize: "50px" }} />
  //     ),
  //     link: "",
  //   },
  //   {
  //     nombre: "Oficina privada",
  //     icono: (
  //       <HiOutlineBuildingOffice2 style={{ color: "grey", fontSize: "50px" }} />
  //     ),
  //     link: "",
  //   },
  //   {
  //     nombre: "Office house",
  //     icono: "<HiOutlineHome style={{ color: 'grey', fontSize: '50px' }}/>",
  //     link: "",
  //   },
  //   {
  //     nombre: "Puesto de Trabajo",
  //     icono: "<GiOfficeChair style={{ color: 'grey', fontSize: '50px' }}/>",
  //     link: "",
  //   },
  //   {
  //     nombre: "Store Point",
  //     icono:
  //       "<HiOutlineBuildingStorefront style={{ color: 'grey', fontSize: '50px' }}/>",
  //     link: "",
  //   },
  //   {
  //     nombre: "Soporte Tecnico",
  //     icono: "<HiOutlineTv style={{ color: 'grey', fontSize: '50px' }}/>",
  //     link: "",
  //   },
  //   {
  //     nombre: "Material tecnico",
  //     icono:
  //       "<HiMiniComputerDesktop style={{ color: 'grey', fontSize: '50px' }}/>",
  //     link: "",
  //   },
  //   {
  //     nombre: "Impresiones",
  //     icono: "<HiOutlinePrinter style={{ color: 'grey', fontSize: '50px' }}/>",
  //     link: "",
  //   },
  // ];




////////////////////////////////
{
  /* {categorias.length ? (
          categorias.map((categoria) => (
            <CardCategoria key={categoria.nombre} title={categoria.nombre} url={categoria.icono} />
          ))
        ) : (
          <h3> No encontramos productos para recomendar </h3>
        )} */
}

/////////////////////////////////////
// {/*
// <div className="categorias">
//   {producto.length ? (
//     producto.slice(0, 6).map((productos) => (
//       <CardCategoria key={productos.id} title={productos.title} url={productos.url} />
//     ))
//   ) : (
//     <h3> No encontramos productos para recomendar </h3>
//   )}
// </div> */}

//      </div>

//);
/////////////////////////////////
//  {/* <HiOutlineBuildingOffice2 style={{ color: "grey", fontSize: "80px" }}/>
//       <HiOutlineBuildingStorefront style={{ color: "grey", fontSize: "80px" }}/>
//       <HiOutlineHome style={{ color: "grey", fontSize: "80px" }}/>
//       <HiOutlineTv style={{ color: "grey", fontSize: "80px" }}/>

//       <HiMiniComputerDesktop style={{ color: "grey", fontSize: "80px" }}/>
//       <HiOutlinePrinter style={{ color: "grey", fontSize: "80px" }}/>

//       <HiOutlineFolder style={{ color: "grey", fontSize: "80px" }}/>
//       <HiOutlineInboxStack style={{ color: "grey", fontSize: "80px" }}/>
//       <GiOfficeChair style={{ color: "grey", fontSize: "80px" }}/> */}

////////////////////////////////////////////////////////

// /   const getRandomProducts = () => {
//     //     const randomProducts = [...producto]
//     //       .sort(() => Math.random() - 0.5)
//     //       .slice(0, 6);
//     //     return randomProducts;
//     //   };

//     //   const productosAleatorios = getRandomProducts();
