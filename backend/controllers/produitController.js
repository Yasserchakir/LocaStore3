const Produit = require('../models/Produit');

// Créer un produit
exports.createProduit = async (req, res) => {
  try {
    const produit = new Produit(req.body); // Crée un produit avec les données de la requête
    await produit.save();
    res.status(201).json({ message: "Produit créé avec succès", produit });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Lire un produit par son ID
exports.getProduitById = async (req, res) => {
  try {
    const produit = await Produit.findById(req.params.id).populate('vendeur'); // On peut peupler les informations du vendeur
    if (!produit) {
      return res.status(404).json({ message: "Produit non trouvé" });
    }
    res.status(200).json(produit);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Lire tous les produits
exports.getAllProduits = async (req, res) => {
  try {
    const produits = await Produit.find();
    res.status(200).json(produits);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Mettre à jour un produit
exports.updateProduit = async (req, res) => {
  try {
    const produit = await Produit.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!produit) {
      return res.status(404).json({ message: "Produit non trouvé" });
    }
    res.status(200).json({ message: "Produit mis à jour avec succès", produit });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Supprimer un produit
exports.deleteProduit = async (req, res) => {
  try {
    const produit = await Produit.findByIdAndDelete(req.params.id);
    if (!produit) {
      return res.status(404).json({ message: "Produit non trouvé" });
    }
    res.status(200).json({ message: "Produit supprimé avec succès" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
