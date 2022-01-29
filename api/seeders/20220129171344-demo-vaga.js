'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Vagas', [{
        empresa: 'Mundiale',
        vaga: 'Estágio Software Development',
        area: 'Tecnologia',
        descricao: 'A Estagiária irá apoiar na criação de novos sistemas e na evolução dos atuais. Para isso, precisamos que você seja capaz de traduzir as necessidades e funcionalidades em plataformas funcionais e atraentes.',
        salario:undefined,
        site: "https://jobs.kenoby.com/mundiale/job/vaga-afirmativa-mulheres-estagio-em-software-development/6127e98af2fe436b3d4be1fc?utm_source=website",
        pessoa_preta: true,
        mae:false,
        pessoa_trans:undefined,
        mais_50:undefined,
        pessoa_pcd:undefined,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('People', null, {});
     
  }
};
