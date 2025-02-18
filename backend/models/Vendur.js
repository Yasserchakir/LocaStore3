const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vendeurSchema = new Schema({
  typeVendeur: {
    type: String, 
    enum: ['Personne physique', 'Société'], 
    required: true
  },
  nomEntreprise: {
    type: String,
    required: function() { return this.typeVendeur === 'Société'; } 
  },
  nomVendeur: {
    type: String,
    required: function() { return this.typeVendeur === 'Personne physique'; }  
  },
  numeroEnregistrement: {
    type: String,
    required: function() { return this.typeVendeur === 'Société'; } 
  },
  secteurActivite: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },

  // Coordonnées du Vendeur
  nomResponsable: {
    type: String,
    required: function() { return this.typeVendeur === 'Société'; } 
  },
  email: {
    type: String,
    required: true,
    match: [/\S+@\S+\.\S+/, 'Please use a valid email address.']
  },
  numeroTelephone: {
    type: String,
    required: true
  },
  adresseEntreprise: {
    type: String,
    required: function() { return this.typeVendeur === 'Société'; } // obligatoire seulement si société
  },
  adresseCorrespondance: {
    type: String,
    default: function() { return this.adresseEntreprise; } // Si différente, précisée par l'utilisateur
  },

  // Informations Légales et Administratives
  numeroTVA: {
    type: String,
    required: function() { return this.typeVendeur === 'Société'; } // obligatoire seulement si société
  },
  statutJuridique: {
    type: String,
    required: function() { return this.typeVendeur === 'Société'; } // obligatoire seulement si société
  },
  regimeFiscal: {
    type: String,
    required: function() { return this.typeVendeur === 'Société'; } // obligatoire seulement si société
  },
  ribIban: {
    type: String,
    required: true
  },
  methodesPaiement: {
    type: [String],
    enum: ['Carte bancaire', 'PayPal', 'Virement', 'Autre'],
    required: true
  }
}, { timestamps: true });

// Création du modèle Mongoose
const Vendeur = mongoose.model('Vendeur', vendeurSchema);

module.exports = Vendeur;
