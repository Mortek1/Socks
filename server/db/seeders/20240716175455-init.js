const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'John',
          email: 'john@example.com',
          password: bcrypt.hashSync('123', 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Jane',
          email: 'jane@example.com',
          password: bcrypt.hashSync('123', 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      'Colors',
      [
        {
          color: '#990000',
        },
        {
          color: '#FFFF00',
        },
        {
          color: '#009900',
        },
        {
          color: '#FFFFFF',
        },
        {
          color: '#000000',
        },
        {
          color: '#666666',
        },
        {
          color: '#00FFFF',
        },
        {
          color: '#660099',
        },
        {
          color: '#FF66FF',
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      'Images',
      [
        {
          imgUrl: 'https://www.pngegg.com/en/png-bmrqk',
        },
        {
          imgUrl:
            'https://r2.erweima.ai/imgcompressed/compressed_864c4b229772ff261289eda2c426ed0a.webp',
        },
        {
          imgUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrLtHD6aNtT69T_qpxGTWLP_8CfCHKaXhHBw&s',
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      'Socks',
      [
        {
          userId: 1,
          colorId: 1,
          imgId: 1,
        },
        {
          userId: 2,
          colorId: 2,
          imgId: 2,
        },
        {
          userId: 1,
          colorId: 3,
          imgId: 3,
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      'ShopCarts',
      [
        {
          userId: 1,
          sockId: 3,
        },
        {
          userId: 2,
          sockId: 1,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
