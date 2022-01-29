'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
  
    await queryInterface.bulkInsert('Usuarios', [{
        nome: 'Gabriela Costa',
        email: 'gabi.costa@designer.com',
        cpf: '695.481.668-01',
        endereco: 'Rua Frida Kahlo,67 - São Paulo',
        nascimento: '1996-01-01',
        senha: '456789',
        pessoa_preta: false,
        mae: true,
        pessoa_trans: false,
        mais_50: false,
        pessoa_pcd: false,
        nao_aplica: false,
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
      nome: 'Larissa Oliveira',
      email: 'Larissao@devfront.com',
      cpf: '046.364.998-24',
      endereco: 'Alameda Marie Curie,711 - São Paulo',
      nascimento: '1965-02-03',
      senha: '789123',
      pessoa_preta: false,
      mae: true,
      pessoa_trans: false,
      mais_50: true,
      pessoa_pcd: false,
      nao_aplica: false,
      createdAt: new Date(),
      updatedAt: new Date()
     }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('Usuarios', null, {});

  }
};
