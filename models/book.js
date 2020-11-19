'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Book.init({
    book_name: DataTypes.STRING,
    cover_image: DataTypes.STRING,
    description: DataTypes.STRING,
    genre: DataTypes.STRING,
    isbn: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};