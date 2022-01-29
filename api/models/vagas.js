'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vagas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Vagas.init({
    empresa: DataTypes.STRING,
    vaga: DataTypes.STRING,
    area: DataTypes.STRING,
    descricao: DataTypes.TEXT,
    salario: DataTypes.FLOAT,
    site: DataTypes.STRING,
    pessoa_preta: DataTypes.BOOLEAN,
    mae: DataTypes.BOOLEAN,
    pessoa_trans: DataTypes.BOOLEAN,
    mais_50: DataTypes.BOOLEAN,
    pessoa_pcd: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Vagas',
  });
  return Vagas;
};