'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Usuarios.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    cpf: DataTypes.STRING,
    endereco: DataTypes.STRING,
    nascimento: DataTypes.DATEONLY,
    senha: DataTypes.STRING,
    pessoa_preta: DataTypes.BOOLEAN,
    mae: DataTypes.BOOLEAN,
    pessoa_trans: DataTypes.BOOLEAN,
    mais_50: DataTypes.BOOLEAN,
    pessoa_pcd: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Usuarios',
  });
  return Usuarios;
};