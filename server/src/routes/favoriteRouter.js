const express = require('express');
const { Sock } = require('../../db/models');

const favoriteRouter = express.Router();

favoriteRouter.get('/', async (req, res) => {
  try {
    const socks = await Sock.findAll();
    res.json(socks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

favoriteRouter.post('/', async (req, res) => {
  const socks = new Sock({
    color: req.body.color,
    userId: req.body.userId,
    logo: req.body.logo,
  });

  try {
    const newSock = await socks.save();
    res.status(201).json(newSock);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

favoriteRouter.delete('/:id', async (req, res) => {
  try {
    const socks = await Sock.findById(req.params.id);
    if (!socks) return res.status(404).json({ message: 'Товар не найден' });

    await socks.remove();
    res.json({ message: 'Товар удален' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = favoriteRouter; 
