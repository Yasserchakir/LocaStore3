const express = require('express');
const router = express.Router();
const produitController = require('../controllers/produitController');

// Route pour créer un produit
router.post('/', produitController.createProduit);

// Route pour lire un produit par son ID
router.get('/:id', produitController.getProduitById);

// Route pour lire tous les produits
router.get('/', produitController.getAllProduits);

// Route pour mettre à jour un produit
router.put('/:id', produitController.updateProduit);

// Route pour supprimer un produit
router.delete('/:id', produitController.deleteProduit);

module.exports = router;
