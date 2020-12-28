<<<<<<< HEAD
'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {

        return queryInterface.createTable('Teams', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            name: Sequelize.STRING,
            members: Sequelize.STRING,
            createdAt:{type: Sequelize.DATE, defaultValue: Date.now},
            updatedAt:{type: Sequelize.DATE, defaultValue: Date.now}
        });
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Teams');
    }
=======
module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.createTable('Teams', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: Sequelize.STRING,
      members: Sequelize.STRING,
      deletedAt: { type: Sequelize.DATE },
      createdAt: { type: Sequelize.DATE, defaultValue: Date.now },
      updatedAt: { type: Sequelize.DATE, defaultValue: Date.now },
    }),

  down: async (queryInterface, Sequelize) => queryInterface.dropTable('Teams'),
>>>>>>> 9d9ebad580b3ce795605f05ae53d05a0d1a043b4
};
