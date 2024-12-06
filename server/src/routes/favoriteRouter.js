



// favoriteRouter.get('/', async (req, res) => {
//   try {
//     const userId = req.user.id; // Доступ к ID пользователя из middleware

//     const favorites = await Favorite.findAll({
//       where: { userId },
//       include: {
//         model: Sock,
//         attributes: ['image', 'color', 'logo'], // Поля, которые вы хотите отобразить
//       },
//     });

//     const socks = favorites.map((favorite) => favorite.Sock); // Извлекаем носки из избранного
//     res.json(socks); // Отправляем список носков клиенту
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Ошибка при получении избранного' });
//   }
// });

// module.exports = favoriteRouter;

















const express = require('express');
const { Sock, Favorite } = require('../../db/models');
const verifyAccessToken = require('../middlewares/verifyAccessToken');

const favoriteRouter = express.Router();

favoriteRouter.route('/').get(verifyAccessToken, async (req, res) => {
  try {
    // Получаем все избранные носки для текущего пользователя
    const userId = res.locals.user.id; // Предполагается, что ID пользователя берется из авторизации

    const favorites = await Favorite.findAll({
      where: { userId }, // Фильтруем по текущему пользователю
      include: {
        model: Sock, // Связь с моделью Sock
        attributes: ['image', 'logo', 'color'], // Выбираем только нужные поля
      },
    });

    // Преобразуем данные в удобный для фронтенда формат
    // const socks = favorites.map((favorite) => favorite.Sock);

    res.json(favorites);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Ошибка при получении избранного' });
  }
});

favoriteRouter.delete('/:id', async (req, res) => {
  try {
    const socks = await Favorite.findByPk(req.params.id);
    if (!socks) return res.status(404).json({ message: 'Товар не найден' });

    await socks.destroy();
    res.json({ message: 'Товар удален' });
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: err.message });
  }
});

module.exports = favoriteRouter;
























// const express = require('express');
// const { Sock, Favorite } = require('../../db/models');


// const favoriteRouter = express.Router();

// favoriteRouter.get('/', async (req, res) => {
//   try {
//     const socks = await Favorite.findAll();
//     res.json(socks);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });





// favoriteRouter.get('/', async (req, res) => {
//   try {
//     const socks = await Sock.findAll();
//     res.json(socks);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// favoriteRouter.post('/', async (req, res) => {
//   const socks = new Sock({
//     color: req.body.color,
//     userId: req.body.userId,
//     logo: req.body.logo,
//   });

//   try {
//     const newSock = await socks.save();
//     res.status(201).json(newSock);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// favoriteRouter.delete('/:id', async (req, res) => {
//   try {
//     const socks = await Sock.findById(req.params.id);
//     if (!socks) return res.status(404).json({ message: 'Товар не найден' });

//     await socks.remove();
//     res.json({ message: 'Товар удален' });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// module.exports = favoriteRouter; 
