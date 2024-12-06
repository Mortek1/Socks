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
const { Sock, Cart, Favorite } = require('../../db/models');
const verifyAccessToken = require('../middlewares/verifyAccessToken');

const generatorRouter = express.Router();

generatorRouter.post('/favorites',verifyAccessToken, async (req, res) => {
  try {
    const { color, logo } = req.body;

    if (!color || !logo) {
      return res
        .status(400)
        .json({ message: 'Все поля должны быть заполнены' });
    }
    const newSock = await Sock.create({ userId: res.locals.user.id, color, logo });
    const newFavorite = await Favorite.create({ sockId: newSock.id, userId: res.locals.user.id });
    res.status(201).json(newFavorite);
  } catch (error) {
    console.error('Ошибка при добавлении в избранное:', error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
});

generatorRouter.post('/carts', verifyAccessToken, async (req, res) => {
  try {
    const { color, logo } = req.body;

    if ( !color || !logo) {
      return res
        .status(400)
        .json({ message: 'Все поля должны быть заполнены' });
    }
    const newSock = await Sock.create({ userId: res.locals.user.id, color, logo });
    const newCart = await Cart.create({ sockId: newSock.id, userId: res.locals.user.id });
    res.status(201).json(newCart);
  } catch (error) {
    console.error('Ошибка при добавлении в избранное:', error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
});

module.exports = generatorRouter;
