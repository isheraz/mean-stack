'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Events', {
      id:{
          type:Sequelize.INTEGER,unique:true,primaryKey:true,autoIncrement:true
      },
      name:{
          type:Sequelize.STRING,nullable:false
      },
      venue:{
          type:Sequelize.STRING,nullable:false
      },
      date:{
          type:Sequelize.DATE,defaultValue:Date.now
      },
      createdAt:{
        type:Sequelize.DATE,
        defaultValue:Date.now
    },
    updatedAt:{
        type:Sequelize.DATE,
        defaultValue:Date.now
    }

  });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Event');
  }
};
