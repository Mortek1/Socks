const express = require('express');

const generatorRouter = express.Router();
const { Sock } = require('../../db/models');
const verifyAccessToken = require('../middlewares/verifyAccessToken');

generatorRouter.route('/').post(verifyAccessToken, async (req, res) => {
  try {
    const { userId, image, logo, color } = req.body;
    const newSock = await Sock.create({
      userId,
      color,
      image,
      logo,
    });
    res.status(201).json(newSock);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
});

module.exports = generatorRouter;
