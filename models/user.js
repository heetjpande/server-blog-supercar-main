'use strict';
const {
  Model
} = require('sequelize');
const { encode } = require("../helpers/bcrypt");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
      User.hasMany(models.Blog, { foreignKey: "UserId" });
      User.hasMany(models.Comment, { foreignKey: "UserId" });
    }
  };
  User.init({
   username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          args: true,
          msg: "Username must be unique",
        },
        validate: {
          notNull: { msg: "Username is required" },
          notEmpty: { msg: "Username is required" },
          customValidator(value) {
            if (/^[-\w\.\$@\*\!]{5,16}$/i.test(value) === false)
              throw new Error(
                "5 - 16 characters allowed and no space allowed in username."
              );
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Password is required" },
          notEmpty: { msg: "Password is required" },
        },
      },
      email: {
        type: DataTypes.STRING,
        unique: {
          args: true,
          msg: "Email must be unique",
        },
        allowNull: false,
        validate: {
          notNull: { msg: "Email is required" },
          notEmpty: { msg: "Email is required" },
          isEmail: { msg: "Invalid email format" },
        },
      },
  }, {
    hooks: {
      beforeCreate: (user, options) => {
        user.password = encode(user.password);
      },
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};