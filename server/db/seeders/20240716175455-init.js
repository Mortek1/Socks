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
