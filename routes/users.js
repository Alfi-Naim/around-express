const usersRouter = require('express').Router();

const fsPromises = require('fs').promises;
const path = require('path');

const usersPath = path.join(__dirname, '../data/users.json');
const readFile = fsPromises.readFile(usersPath, { encoding: 'utf-8' });

usersRouter.get('/users', (req, res) => {
  readFile.then((data) => {
    res.status(200).send(JSON.parse(data));
  })
    .catch(() => {
      res.status(500).send({ message: 'Requested resource not found' });
    });
});

usersRouter.get('/users/:id', (req, res) => {
  readFile.then((data) => {
    const usersJson = JSON.parse(data);
    const user = usersJson.find((userItem) => userItem._id === req.params.id);

    if (!user) {
      res.status(404).send({ message: 'User ID not found' });
      return;
    }

    res.status(200).send(user);
  })
    .catch(() => {
      res.status(500).send({ message: 'Requested resource not found' });
    });
});

module.exports = usersRouter;
