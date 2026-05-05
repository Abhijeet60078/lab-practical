const express = require('express');

const app = express();

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  
  if (authHeader === 'admin123') {
    next();
  } else {
    res.status(403).send('Access Denied');
  }
};

app.get('/public', (req, res) => {
  res.send('Public route');
});

app.get('/private', authMiddleware, (req, res) => {
  res.send('Welcome to Private route');
});

module.exports = app;
