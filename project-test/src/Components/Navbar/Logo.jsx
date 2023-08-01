import React from "react";
import { Link } from "react-router-dom";
import "./Logo.css";

const Logo = () => {
  return (
    <Link to={"/"} >
    <div className="LogoLema">
      
        <div className="Logo">Logo</div>
        <div className="Lema">Lema de la empresa</div>
      
    </div>
    </Link>
  );
};

export default Logo;
