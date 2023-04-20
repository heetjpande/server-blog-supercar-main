'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models) {
      Comment.belongsTo(models.Blog, { foreignKey: "BlogId" });
      Comment.belongsTo(models.User, { foreignKey: "UserId" });
    }
  };
  Comment.init({
    comment: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: { msg: `Comment can't be empty` },
        notNull: { msg: `Comment can't be empty` },
      },
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: `Username can't be empty` },
        notNull: { msg: `Username can't be empty` },
      },
    },
    BlogId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: { msg: `Blog ID can't be empty` },
        notNull: { msg: `Blog ID can't be empty` },
      },
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: { msg: `User ID can't be empty` },
        notNull: { msg: `User ID can't be empty` },
      },
    }
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};