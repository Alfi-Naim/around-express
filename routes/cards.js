const cardsRouter = require('express').Router();
const fsPromises = require('fs').promises;
const path = require('path');

const cardsPath = path.join(__dirname, '../data/cards.json');
const readFile = fsPromises.readFile(cardsPath, { encoding: 'utf-8' });

cardsRouter.get('/cards', (req, res) => {
  readFile.then((data) => {
    res.status(200).send(JSON.parse(data));
  })
    .catch(() => {
      res.status(500).send({ message: 'Requested resource not found' });
    });
});

module.exports = cardsRouter;
