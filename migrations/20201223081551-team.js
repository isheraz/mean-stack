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
};
