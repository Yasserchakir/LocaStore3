const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Création du schéma pour un administrateur
const adminSchema = new Schema({
  // Informations Générales de l'Admin
  nom: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/\S+@\S+\.\S+/, 'Please use a valid email address.']
  },
  motDePasse: {
    type: String,
    required: true,
    minlength: 6
  },
  
  

  // Gestion des utilisateurs
  // L'admin peut avoir une liste d'utilisateurs qu'il gère, mais cela dépend de l'architecture.
  utilisateursGerés: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Vendeur'  // Référence à un modèle de vendeur
    }
  ],

  // Informations Légales et Sécuritaires
  statutCompte: {
    type: String,
    enum: ['Actif', 'Suspendu'],
    default: 'Actif'
  },

  dateInscription: {
    type: Date,
    default: Date.now
  },

  dernierAcces: {
    type: Date
  },

  // Optionnel : Historique des actions de l'admin
  actionsRecemmentEffectuées: [
    {
      action: String,  // Ex. : "Validation produit", "Suppression utilisateur", etc.
      dateAction: {
        type: Date,
        default: Date.now
      },
      description: String
    }
  ]

}, { timestamps: true });

// Création du modèle Mongoose
const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
