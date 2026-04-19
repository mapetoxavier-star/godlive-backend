let wallets = {
  1: {
    usd: 100,
    cdf: 200000
  }
};

// Voir wallet
exports.getWallet = (req, res) => {
  const userId = 1;

  const wallet = wallets[userId];

  res.json({
    success: true,
    wallet
  });
};

// Dépôt
exports.deposit = (req, res) => {
  const { amount, currency } = req.body;
  const userId = 1;

  if (!wallets[userId]) {
    wallets[userId] = { usd: 0, cdf: 0 };
  }

  if (currency === "USD") {
    wallets[userId].usd += amount;
  } else if (currency === "CDF") {
    wallets[userId].cdf += amount;
  }

  res.json({
    message: "Dépôt effectué",
    wallet: wallets[userId]
  });
};
