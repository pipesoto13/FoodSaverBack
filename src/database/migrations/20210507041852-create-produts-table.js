'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable(
      'products',
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          primaryKey: true,
          autoincrement: true,
        },
        name: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
        description: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
        price: {
          type: Sequelize.DataTypes.FLOAT,
          allowNull: false,
          defaultValue: 0,
        },
        weight: {
          type: Sequelize.DataTypes.FLOAT,
          allowNull: true,
        },
        address: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
        expDate: {
          type: Sequelize.DataTypes.DATEONLY,
          allowNull: false,
        },
        latLoc: {
          type: Sequelize.DataTypes.FLOAT,
          allowNull: false,
        },        
        longLoc: {
          type: Sequelize.DataTypes.FLOAT,
          allowNull: false,
        },        
        photo: {
          type: Sequelize.DataTypes.STRING,
          allowNull: true,
        },
        SellerId: Sequelize.DataTypes.INTEGER,
        createdAt: Sequelize.DataTypes.DATE,
        updatedAt: Sequelize.DataTypes.DATE,
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('products')
  }
};
