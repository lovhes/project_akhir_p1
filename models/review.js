'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Review.init({
    review: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: `review is required`
        }
      }},
    rating: {
      type: DataTypes.STRING,
      validate: {
        notEmpty:{
          msg: `rating is required`
        },
        min:{
          args: 1,
          msg: `rating must be greater than 0`
        },
        max:{
          args: 5,
          msg: `rating can't be greater than 5`
        }
      }},
    UserId: DataTypes.INTEGER,
    BookId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};