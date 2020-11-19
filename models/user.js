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
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING
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