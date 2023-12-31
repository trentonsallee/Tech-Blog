const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Comment extends Model {}

Comment.init(
  {
    body: DataTypes.STRING,
    comment: DataView.STRING
  },
  {
    sequelize
  }
);

module.exports = Comment;
