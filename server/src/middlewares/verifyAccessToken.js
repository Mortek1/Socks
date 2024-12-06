// const jwt = require('jsonwebtoken');
// require('dotenv').config();

// function verifyAccessToken(req, res, next) {
//   try {
//     const accessToken = req.headers.authorization.split(' ')[1]; // Получаем токен
//     const { user } = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET); // Расшифровываем токен
//     req.user = user; // Сохраняем пользователя в req.user
//     next(); // Передаем управление дальше
//   } catch (error) {
//     console.log('Invalid access token:', error.message);
//     res.sendStatus(403); // Возвращаем 403, если токен недействителен
//   }
// }

// module.exports = verifyAccessToken;


const jwt = require('jsonwebtoken');
require('dotenv').config();

function verifyAccessToken(req, res, next) {
  try {
    const accessToken = req.headers.authorization.split(' ')[1];
    const { user } = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
    res.locals.user = user;
    next();
  } catch (error) {
    console.log('Invalid access token');
    res.sendStatus(403);
  }
}

module.exports = verifyAccessToken;
