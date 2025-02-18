import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Promotions from "./pages/Promotions"; // Ajout de la page Promotions

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/promotions" element={<Promotions />} /> {/* Ajout de cette ligne */}
      </Routes>
    </Router>
  );
}

export default App;
