const express = require('express');
const app = express();
const port = 3000;

// Ajoutez des routes ici

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
app.get('/', (req, res) => {
    res.send('EduAction');
});
// Importez mongoose et le modèle de données
const mongoose = require('mongoose');
const User = require('./models'); // Assurez-vous que le chemin est correct

// Ajoutez une route pour gérer l'inscription des utilisateurs
app.post('/inscription', async (req, res) => {
    // Traitement de l'inscription, par exemple, sauvegardez les données dans la base de données
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de l\'inscription' });
    }
});

// Ajoutez d'autres routes pour les fonctionnalités supplémentaires
