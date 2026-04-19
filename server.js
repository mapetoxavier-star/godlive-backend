const express = require('express');
const app = express();

app.use(express.json());

// Route test
app.get('/', (req, res) => {
  res.send('GodLive Backend API 🚀');
});

// Login simulation
app.post('/api/login', (req, res) => {
  const { telephone, password } = req.body;

  if (telephone === "0990000000" && password === "1234") {
    return res.json({
      message: "Connexion réussie",
      user: {
        id: 1,
        nom: "Agent Test",
        role: "agent"
      }
    });
  }

  res.status(401).json({ message: "Identifiants invalides" });
});

// ================= WALLET =================
const wallet = require('./wallet');

// voir wallet
app.get('/api/wallet', wallet.getWallet);

// dépôt
app.post('/api/deposit', wallet.deposit);
// ==========================================

module.exports = app;
