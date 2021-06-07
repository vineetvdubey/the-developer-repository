const express = require('express');
const router = express.Router();
const developersManager = require('./developersManager');

router.get('/', (req, res) => {
  res.send('Get all developers');
});

router.post('/', (req, res) => {
  res.send('Add a developer');
});

router.get('/:id', (req, res) => {
  res.send('Get a developer');
});

router.delete('/:id', (req, res) => {
  res.send('Remove a developer');
});

module.exports = router;
