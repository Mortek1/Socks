const express = require('express');
const { Sock } = require('../../db/models');

const cartRouter = express.Router();

cartRouter.get('/', async (req, res) => {
  try {
    const socks = await Sock.findAll();
    res.json(socks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

cartRouter.post('/', async (req, res) => {
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

cartRouter.delete('/:id', async (req, res) => {
  try {
    const socks = await Sock.findById(req.params.id);
    if (!socks) return res.status(404).json({ message: 'Товар не найден' });

    await socks.remove();
    res.json({ message: 'Товар удален' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = cartRouter;


















// const express = require('express');
// const cartRouter = express.Router();
// const { ShopCart } = require('../../db/models')
// const verifyAccessToken = require('../middlewares/verifyAccessToken');

// cartRouter.route('/').get(verifyAccessToken, async (req, res) => {
//   try {
//     const carts = await ShopCart.findAll();
//     res.status(200).json(carts);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Ошибка сервера' });
//   }
// });

// cartRouter
//   .post(verifyAccessToken, async (req, res) => {
//     try {
//       const { userId } = req.body;
//       const newCart = await ShopCart.create({ userId });
//       res.status(201).json(newCart);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Ошибка сервера' });
//     }
//   })
//   .delete(verifyAccessToken, async (req, res) => {
//     try {
//       const { sockId } = req.params;
//       if (Number.isNaN(+sockId)) {
//         return res.status(400).json({ message: 'ID носка должен быть числом' });
//       }
//       const deleted = await ShopCart.destroy({ where: { sockId } });
//       if (!deleted) {
//         return res.status(404).json({ message: 'В корзину не добавлен' });
//       }
//       res.sendStatus(200);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Ошибка сервера' });
//     }
//   });

//   module.exports = cartRouter