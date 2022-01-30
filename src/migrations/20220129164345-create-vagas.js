'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Vagas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      empresa: {
        allowNull: false,
        type: Sequelize.STRING
      },
      vaga: {
        allowNull: false,
        type: Sequelize.STRING
      },
      area: {
        type: Sequelize.STRING
      },
      descricao: {
        type: Sequelize.TEXT
      },
      salario: {
        type: Sequelize.FLOAT
      },
      site: {
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
    await queryInterface.dropTable('Vagas');
  }
};