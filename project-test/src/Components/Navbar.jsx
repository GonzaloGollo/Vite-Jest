import React from "react";
import BotonCrearCuenta from "./Navbar/BotonCrearCuenta";
import BotonInicio from "./Navbar/BotonInicio";
import Logo from "./Navbar/Logo";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Logo/>
          </li>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "1rem",
              marginRight: "0.5rem",
            }}
          >
            <li>
              <BotonCrearCuenta/>
            </li>
            <li>
              <BotonInicio/>
            </li>
          </div>
        </ul>
      </nav>

      
    </>
  );
};

export default Navbar;


{/* <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          position: "sticky",
          top: 0,
          left: 0,
        }}
      >
        <div style={{ marginLeft: "0.5rem" }}>

          <Link to={"/"}>
            <Logo />
          </Link>

        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "1rem",
            marginRight: "0.5rem",
          }}
        >
          <BotonCrearCuenta />
          <BotonInicio />
        </div>
      </div> */}