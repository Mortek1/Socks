// const express = require('express');

// const generatorRouter = express.Router();
// const { Sock } = require('../../db/models');
// const verifyAccessToken = require('../middlewares/verifyAccessToken');

// generatorRouter.route('/').post(verifyAccessToken, async (req, res) => {
//   try {
//     const { userId, image, logo, color } = req.body;
//     const newSock = await Sock.create({
//       userId,
//       color,
//       image,
//       logo,
//     });
//     res.status(201).json(newSock);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: 'Ошибка сервера' });
//   }
// });

// module.exports = generatorRouter;

const express = require('express');
const { Sock } = require('../../db/models');

const generatorRouter = express.Router();

generatorRouter.post('/favorites', async (req, res) => {
  try {
    const { userId, color, logo } = req.body;

    if (!userId || !color || !logo) {
      return res.status(400).json({ message: 'Все поля должны быть заполнены' });
    }
    const newFavoriteSock = await Sock.create({ userId, color, logo });
    res.status(201).json(newFavoriteSock);
  } catch (error) {
    console.error('Ошибка при добавлении в избранное:', error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
});

// Добавление носков в корзину
generatorRouter.post('/carts', async (req, res) => {
  try {
    const { userId, color, logo } = req.body;

    if (!userId || !color || !logo) {
      return res.status(400).json({ message: 'Все поля должны быть заполнены' });
    }

    const newCartSock = await Sock.create({ userId, color, logo });
    res.status(201).json(newCartSock);
  } catch (error) {
    console.error('Ошибка при добавлении в корзину:', error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
});

module.exports = generatorRouter;