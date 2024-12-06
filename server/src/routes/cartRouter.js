const express = require('express');
const cartRouter = express.Router();
const { ShopCart } = require('../../db/models')
const verifyAccessToken = require('../middlewares/verifyAccessToken');

cartRouter.route('/').get(verifyAccessToken, async (req, res) => {
  try {
    const carts = await ShopCart.findAll();
    res.status(200).json(carts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
});

cartRouter
  .route('/:sockId')
  .post(verifyAccessToken, async (req, res) => {
    try {
      const { userId } = req.body;
      const { sockId } = req.params;
      if (Number.isNaN(+sockId)) {
        return res.status(400).json({ message: 'ID носка должен быть числом' });
      }
      const newCart = await ShopCart.create({ userId, sockId });
      res.status(201).json(newCart);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Ошибка сервера' });
    }
  })
  .delete(verifyAccessToken, async (req, res) => {
    try {
      const { sockId } = req.params;
      if (Number.isNaN(+sockId)) {
        return res.status(400).json({ message: 'ID носка должен быть числом' });
      }
      const deleted = await ShopCart.destroy({ where: { sockId } });
      if (!deleted) {
        return res.status(404).json({ message: 'В корзину не добавлен' });
      }
      res.sendStatus(200);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Ошибка сервера' });
    }
  });

  module.exports = cartRouter