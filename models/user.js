'use strict';
const { hashPass } =require('../helper/password')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsToMany(models.Book, {through: models.Review})
    }
    getFullName(){
      return `${this.first_name} ${this.last_name}`
    }
  };
  User.init({
    first_name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty:{
          msg: `first name is required`
        }
      }
    },
    last_name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty:{
          msg: `last name is required`
        }
      }
    },
    username: {
      type: DataTypes.STRING,
      validate: {
        notEmpty:{
          msg: `username is required`
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty:{
          msg: `password is required`
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty:{
          msg: `email is required`
        }
      }
    }
  }, {
    hooks: {
      beforeCreate:(instance, options) => {
        instance.password = hashPass(instance.password) //helper req done
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};