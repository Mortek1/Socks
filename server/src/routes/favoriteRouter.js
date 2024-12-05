const express = require('express');
const { Favorite } = require('../../db/models');

const favoriteRouter = express.Router();

favoriteRouter.get('/favorites', async (req, res) => {
  try {
    const favorites = await Favorite.findAll();
    res.json(favorites);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

favoriteRouter.post('/favorites', async (req, res) => {
  const favorite = new Favorite({
    name: req.body.name,
    price: req.body.price,
  });

  try {
    const newFavorite = await favorite.save();
    res.status(201).json(newFavorite);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

favoriteRouter.delete('/favorites/:id', async (req, res) => {
  try {
    const favorite = await Favorite.findById(req.params.id);
    if (!favorite) return res.status(404).json({ message: 'Товар не найден' });

    await favorite.remove();
    res.json({ message: 'Товар удален' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = favoriteRouter;
