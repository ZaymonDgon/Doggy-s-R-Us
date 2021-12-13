const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Company extends Model {}

Company.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      // defaultValue: 1,
      autoIncrement: false,
    },
    building_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    }
    // customer_id: {
    //   type: DataTypes.INTEGER,
    //   references:{
    //     model: ['customer'],
    //     key:'id'
    //   }
    // }
    // Manager_id: {
    //   type: DataTypes.STRING,
    //   references: {
    //       model: 'role',
    //       //might change i
    //       key: 'id',
    //   }
    // },
    // operational_hours: {
    //   type: DataTypes.STRING,
    // },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'company',
  }
)

module.exports = Company;