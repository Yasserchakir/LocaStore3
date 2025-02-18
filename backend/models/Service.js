const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Création du schéma pour un service
const serviceSchema = new Schema({
  // Informations Générales du Service
  nomService: {
    type: String,
    required: true
  },
  descriptionService: {
    type: String,
    required: true
  },
  prix: {
    type: Number,
    required: true
  },
  categorie: {
    type: String,
    required: true
  },
  conditionsPrestation: {
    type: String, // Conditions spécifiques pour la prestation
    required: true
  },
  imageUrl: {
    type: String, // Lien vers une image pour illustrer le service
    required: true
  },

  // Informations sur le vendeur
  vendeur: {
    type: Schema.Types.ObjectId,
    ref: 'Vendeur', // Référence au modèle Vendeur
    required: true
  },

  // Détails de la prestation
  dureePrestation: {
    type: String, // Exemple : "2 heures", "1 jour"
    required: true
  },
  lieuPrestation: {
    type: String, // Lieu où le service est fourni (ex. à domicile, en ligne, etc.)
    required: true
  },

  // Statut et visibilité du service
  statutService: {
    type: String,
    enum: ['Disponible', 'Indisponible'],
    default: 'Disponible'
  },

  dateAjout: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

// Création du modèle Mongoose pour le service
const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
