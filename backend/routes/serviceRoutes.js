const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');

// Route pour créer un service
router.post('/', serviceController.createService);

// Route pour lire un service par son ID
router.get('/:id', serviceController.getServiceById);

// Route pour lire tous les services
router.get('/', serviceController.getAllServices);

// Route pour mettre à jour un service
router.put('/:id', serviceController.updateService);

// Route pour supprimer un service
router.delete('/:id', serviceController.deleteService);

module.exports = router;
