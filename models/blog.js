'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Blog extends Model {
    static associate(models) {
      // define association here
      Blog.belongsTo(models.User, { foreignKey: "UserId" });
      Blog.hasMany(models.Comment, { foreignKey: "BlogId" });
    }
  };
  Blog.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "Title is required" },
        notEmpty: { msg: "Title is required" },
      },
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: { msg: "Content is required" },
        notEmpty: { msg: "Content is required" },
      },
    },
    imgUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "Image URL is required" },
        notEmpty: { msg: "Image URL is required" },
      },
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { msg: "USER ID is required" },
        notEmpty: { msg: "USER ID is required" },
      },
    }
  }, {
    sequelize,
    modelName: 'Blog',
  });
  return Blog;
};