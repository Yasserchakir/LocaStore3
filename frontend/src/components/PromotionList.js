import React, { useEffect, useState } from "react";
import { getPromotions, deletePromotion } from "../services/promotionService";
import PromotionForm from "./PromotionForm";

const PromotionList = () => {
  const [promotions, setPromotions] = useState([]);

  useEffect(() => {
    fetchPromotions();
  }, []);

  const fetchPromotions = () => {
    getPromotions()
      .then((response) => setPromotions(response.data))
      .catch((error) => console.error("Erreur lors du chargement des promotions:", error));
  };

  const handleDelete = (id) => {
    deletePromotion(id)
      .then(() => setPromotions(promotions.filter((p) => p._id !== id)))
      .catch((error) => console.error("Erreur lors de la suppression:", error));
  };

  const handlePromotionAdded = (newPromotion) => {
    setPromotions([...promotions, newPromotion]);
  };

  return (
    <div>
      <h2>Liste des Promotions</h2>
      <PromotionForm onPromotionAdded={handlePromotionAdded} />
      <ul>
        {promotions.map((promotion) => (
          <li key={promotion._id}>
            {promotion.nom} - {promotion.remise}% de réduction
            <button onClick={() => handleDelete(promotion._id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PromotionList;
