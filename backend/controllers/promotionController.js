const Promotion = require('../models/Promotion');

// ✅ Créer une nouvelle promotion
exports.createPromotion = async (req, res) => {
  try {
    const { nom, description, pourcentageReduction, dateDebut, dateFin, produits } = req.body;

    const nouvellePromotion = new Promotion({
      nom,
      description,
      pourcentageReduction,
      dateDebut,
      dateFin,
      produits
    });

    await nouvellePromotion.save();
    res.status(201).json({ message: 'Promotion créée avec succès', promotion: nouvellePromotion });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la création de la promotion', error });
  }
};

// ✅ Récupérer toutes les promotions
exports.getAllPromotions = async (req, res) => {
  try {
    const promotions = await Promotion.find().populate('produits');
    res.status(200).json(promotions);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des promotions', error });
  }
};

// ✅ Récupérer une promotion par ID
exports.getPromotionById = async (req, res) => {
  try {
    const promotion = await Promotion.findById(req.params.id).populate('produits');
    if (!promotion) return res.status(404).json({ message: 'Promotion non trouvée' });

    res.status(200).json(promotion);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération de la promotion', error });
  }
};

// ✅ Mettre à jour une promotion
exports.updatePromotion = async (req, res) => {
  try {
    const updatedPromotion = await Promotion.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!updatedPromotion) return res.status(404).json({ message: 'Promotion non trouvée' });

    res.status(200).json({ message: 'Promotion mise à jour avec succès', promotion: updatedPromotion });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la mise à jour de la promotion', error });
  }
};

// ✅ Supprimer une promotion
exports.deletePromotion = async (req, res) => {
  try {
    const deletedPromotion = await Promotion.findByIdAndDelete(req.params.id);
    if (!deletedPromotion) return res.status(404).json({ message: 'Promotion non trouvée' });

    res.status(200).json({ message: 'Promotion supprimée avec succès' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la suppression de la promotion', error });
  }
};
