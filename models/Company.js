const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Company extends Model {}

Company.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    building_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    number_of_employees: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Manager_id: {
      type: DataTypes.STRING,
      references: {
          model: 'role',
          //might change i
          key: 'id',
      }
    },
    operational_hours: {
      type: DataTypes.STRING,
    },
  }
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'employee',
  }
)

module.exports = Company;