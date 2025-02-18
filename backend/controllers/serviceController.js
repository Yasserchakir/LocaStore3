const Service = require('../models/Service');

// Créer un service
exports.createService = async (req, res) => {
  try {
    const service = new Service(req.body); // Crée un service avec les données de la requête
    await service.save();
    res.status(201).json({ message: "Service créé avec succès", service });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Lire un service par son ID
exports.getServiceById = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id).populate('vendeur'); // On peut peupler les informations du vendeur
    if (!service) {
      return res.status(404).json({ message: "Service non trouvé" });
    }
    res.status(200).json(service);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Lire tous les services
exports.getAllServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).json(services);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Mettre à jour un service
exports.updateService = async (req, res) => {
  try {
    const service = await Service.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!service) {
      return res.status(404).json({ message: "Service non trouvé" });
    }
    res.status(200).json({ message: "Service mis à jour avec succès", service });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Supprimer un service
exports.deleteService = async (req, res) => {
  try {
    const service = await Service.findByIdAndDelete(req.params.id);
    if (!service) {
      return res.status(404).json({ message: "Service non trouvé" });
    }
    res.status(200).json({ message: "Service supprimé avec succès" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
