const express = require('express');
const mongoose = require('mongoose');
const serviceRoutes = require('./routes/serviceRoutes'); // Import des routes pour les services
const promotionRoutes = require('./routes/promotionRoutes');
const produitRoutes = require('./routes/produitRoutes'); // Import des routes pour les produits

const app = express();
app.use(express.json()); // Middleware pour parser le JSON dans les requêtes

// Connexion à la base de données MongoDB en utilisant une URI MongoDB Atlas
const mongoURI = 'mongodb+srv://ziedjaber:ASUSROGSTRIKG15@locastore.y717n.mongodb.net/locastore';

// Remplacez <username> et <password> par vos informations d'authentification MongoDB Atlas
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(err => console.log('Erreur de connexion à MongoDB: ', err));

// Utilisation des routes services
app.use('/api/services', serviceRoutes);
app.use('/api/promotions', promotionRoutes);
app.use('/api/produits', produitRoutes);

// Démarrage du serveur
const port = 3000;
app.listen(port, () => {
  console.log(`Serveur lancé sur le port ${port}`);
});
