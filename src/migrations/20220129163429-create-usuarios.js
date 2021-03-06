'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      cpf: {
        allowNull: false,
        type: Sequelize.STRING
      },
      endereco: {
        allowNull: false,
        type: Sequelize.STRING
      },
      nascimento: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      senha: {
        allowNull: false,
        type: Sequelize.STRING
      },
      pessoa_preta: {
        type: Sequelize.BOOLEAN
      },
      mae: {
        type: Sequelize.BOOLEAN
      },
      pessoa_trans: {
        type: Sequelize.BOOLEAN
      },
      mais_50: {
        type: Sequelize.BOOLEAN
      },
      pessoa_pcd: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Usuarios');
  }
};