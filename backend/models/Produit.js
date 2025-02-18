const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Création du schéma pour un produit
const produitSchema = new Schema({
  // Informations Générales du Produit
  nomProduit: {
    type: String,
    required: true
  },
  descriptionProduit: {
    type: String,
    required: true
  },
  prixUnitaire: {
    type: Number,
    required: true,
    min: 0
  },
  tva: {
    type: Number,
    required: true,
    min: 0
  },
  prixTotal: {
    type: Number,
    required: true,
    min: 0
  },
 
  famille: {
    type: String, // La famille ou la catégorie plus précise du produit
    required: true
  },
  imageUrl: {
    type: String, // Lien vers une image du produit
    required: true
  },
  quantiteDisponible: {
    type: Number,
    required: true,
    min: 0
  },
  dimensions: {
    type: String, // Exemple : "30x20x15 cm"
    required: true
  },
  poids: {
    type: Number, // Poids en kilogrammes
    required: true
  },

  // Informations sur le vendeur
  vendeur: {
    type: Schema.Types.ObjectId,
    ref: 'Vendeur', // Référence au modèle Vendeur
    required: true
  },

  // Statut et visibilité du produit
  statutProduit: {
    type: String,
    enum: ['Disponible', 'Epuisé', 'Retiré'],
    default: 'Disponible'
  },

  // Promotion
  promotionActive: {
    type: Boolean,
    default: false // Indique si une promotion est active
  },
  reduction: {
    type: Number, // Le pourcentage de réduction
    min: 0,
    max: 100,
    required: function() { return this.promotionActive; } // La réduction ne peut être définie que si la promotion est active
  },
  prixFinal: {
    type: Number,
    required: true,
    min: 0
  },

  dateAjout: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

// Méthode pour calculer le prix total et le prix final du produit (prix unitaire + TVA, avec réduction si active)
produitSchema.pre('save', function (next) {
  // Calcul du prix total (avec TVA)
  this.prixTotal = this.prixUnitaire + (this.prixUnitaire * this.tva / 100);

  // Calcul du prix après réduction si la promotion est active
  if (this.promotionActive && this.reduction) {
    const discountAmount = (this.prixTotal * this.reduction) / 100;
    this.prixFinal = this.prixTotal - discountAmount;
  } else {
    this.prixFinal = this.prixTotal; // Si pas de promotion, le prix final est simplement le prix total
  }
  
  next();
});

// Création du modèle Mongoose pour le produit
const Produit = mongoose.model('Produit', produitSchema);

module.exports = Produit;
