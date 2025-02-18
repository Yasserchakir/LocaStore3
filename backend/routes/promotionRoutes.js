const express = require('express');
const router = express.Router();
const promotionController = require('../controllers/promotionController');

// Routes CRUD
router.post('/', promotionController.createPromotion);        // Créer une promotion
router.get('/', promotionController.getAllPromotions);        // Récupérer toutes les promotions
router.get('/:id', promotionController.getPromotionById);     // Récupérer une promotion par ID
router.put('/:id', promotionController.updatePromotion);      // Mettre à jour une promotion
router.delete('/:id', promotionController.deletePromotion);   // Supprimer une promotion

module.exports = router;
