'use strict';
const { encode } = require("../helpers/bcrypt");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
            email: "damar@mail.com",
            password: encode("damar"),
            username: "damar_cloudxier",
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            email: "jati@mail.com",
            password: encode("damar"),
            username: "jati_cloudxier",
            createdAt: new Date(),
            updatedAt: new Date(),
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  }
};
