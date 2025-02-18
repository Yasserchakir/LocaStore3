import React, { useState } from "react";
import { createPromotion } from "../services/promotionService";

const PromotionForm = ({ onPromotionAdded }) => {
  const [nom, setNom] = useState("");
  const [remise, setRemise] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPromotion = {
      nom,
      remise: parseFloat(remise),
    };

    createPromotion(newPromotion)
      .then((response) => {
        onPromotionAdded(response.data); // Mise à jour de la liste après ajout
        setNom("");
        setRemise("");
      })
      .catch((error) => console.error("Erreur lors de l'ajout de la promotion:", error));
  };

  return (
    <div>
      <h3>Ajouter une Promotion</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nom de la Promotion:</label>
          <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} required />
        </div>
        <div>
          <label>Remise (%):</label>
          <input type="number" value={remise} onChange={(e) => setRemise(e.target.value)} required />
        </div>
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default PromotionForm;
