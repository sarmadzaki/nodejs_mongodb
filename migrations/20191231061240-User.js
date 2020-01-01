'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.createTable('user', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      first_name: {
        type: Sequelize.STRING,
        
      },
      last_name: {
        type: Sequelize.STRING,
      },
      genderId: {
        type: Sequelize.TINYINT,
      },
      date_of_birth: {
        type: Sequelize.DATE,
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      },
    })
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.dropTable('user');
    return;
  }
};
