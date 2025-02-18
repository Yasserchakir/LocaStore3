const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Définition du schéma pour les promotions
const promotionSchema = new Schema({
  nom: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  pourcentageReduction: {
    type: Number,
    required: true,
    min: 0,
    max: 100
  },
  dateDebut: {
    type: Date,
    required: true
  },
  dateFin: {
    type: Date,
    required: true
  },
  produits: [{
    type: Schema.Types.ObjectId,
    ref: 'Produit' // Référence aux produits concernés par la promotion
  }]
}, { timestamps: true });

const Promotion = mongoose.model('Promotion', promotionSchema);

module.exports = Promotion;
