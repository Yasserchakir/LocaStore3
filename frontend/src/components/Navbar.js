import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/products">Produits</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/promotions">Promotions</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
