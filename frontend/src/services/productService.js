import axios from "axios";

const API_URL = "http://localhost:3000/api/produits";

export const getProducts = () => axios.get(API_URL);
export const createProduct = (product) => axios.post(API_URL, product);
export const deleteProduct = (id) => axios.delete(`${API_URL}/${id}`);
