const express = require('express');

const router = express.Router();
const developersManager = require('./developersManager');

router.get('/', (req, res) => {
  res.send(developersManager.getAllDevelopers());
});

router.post('/', (req, res) => {
  developersManager.addDeveloper(req.body).then((result) => {
    if (result.error) {
      res.status(400);
    } else {
      res.status(201);
    }
    res.send(result);
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  developersManager.getDeveloper(id).then((details) => {
    if (details.error) {
      res.status(404);
    } else {
      res.status(200);
    }
    res.send(details);
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  developersManager.deleteDeveloper(id);
  res.sendStatus(204);
});

module.exports = router;
