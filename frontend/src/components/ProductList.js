import React, { useEffect, useState } from "react";
import { getProducts, deleteProduct } from "../services/productService";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((response) => setProducts(response.data));
  }, []);

  const handleDelete = (id) => {
    deleteProduct(id).then(() => setProducts(products.filter((p) => p._id !== id)));
  };

  return (
    <div>
      <h2>Liste des Produits</h2>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            {product.nom} - {product.prix}€
            <button onClick={() => handleDelete(product._id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
