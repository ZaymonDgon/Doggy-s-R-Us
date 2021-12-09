const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Appointment extends Model { }
Appointment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // time: {
    //   type: DataTypes.INTEGER,
    // },
    //-----problem area---------
    // customer_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'customer',
    //     key: 'id',
    //   }
    // },
    //----------fix me----------
   
    company_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'company',
        key: 'id',
      }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'appointment',
  }
)

module.exports = Appointment



