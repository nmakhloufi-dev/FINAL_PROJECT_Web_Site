// backend/index.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5001; // Change le port à 5001

// Connexion à MongoDB (simplifiée sans options dépréciées)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Could not connect to MongoDB:', error));

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
