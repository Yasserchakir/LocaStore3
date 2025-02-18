import axios from "axios";

const API_URL = "http://localhost:3000/api/promotions";

// Récupérer toutes les promotions
export const getPromotions = () => axios.get(API_URL);

// Ajouter une nouvelle promotion
export const createPromotion = (promotion) => axios.post(API_URL, promotion);

// Supprimer une promotion par ID
export const deletePromotion = (id) => axios.delete(`${API_URL}/${id}`);
