const express = require('express');
const { Sock, Cart } = require('../../db/models');
const verifyAccessToken = require('../middlewares/verifyAccessToken');

const cartRouter = express.Router();

cartRouter.get('/', verifyAccessToken, async (req, res) => {
  try {
    const userId = res.locals.user.id; // Предполагается, что ID пользователя берется из авторизации
console.log(userId)
    const carts = await Cart.findAll({
      where: { userId }, // Фильтруем по текущему пользователю
      include: {
        model: Sock, // Связь с моделью Sock
        // attributes: ['image', 'logo', 'color'], // Выбираем только нужные поля
      },
    });
    console.log(carts, '====================================================');
    
    res.json(carts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

cartRouter.post('/', verifyAccessToken, async (req, res) => {
  const socks = new Sock({
    color: req.body.color,
    userId: res.locals.user.id,
    logo: req.body.logo,
  });

  try {
    const newSock = await socks.save();
    console.log('----------------',newSock);
    
    res.status(201).json(newSock);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

cartRouter.delete('/:id', async (req, res) => {
  try {
    const socks = await Sock.findByPk(req.params.id);
    if (!socks) return res.status(404).json({ message: 'Товар не найден' });

    await socks.destroy();
    res.json({ message: 'Товар удален' });
  } catch (err) {
    console.error(err)
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