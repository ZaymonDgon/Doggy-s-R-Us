const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Appointments extends Model {}
Appointments.init(
    {
        app_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        app_time: {
            type: DataTypes.INTEGER,
        },
        package_id: {
            type: DataTypes.INTEGER,
            references: {
              model: "package",
              key: "id",
            }
          },
          customer_id: {
            type: DataTypes.INTEGER,
            references: {
              model: "user",
              key: "id",
            }
          },
          employee_id: {
            type: DataTypes.INTEGER,
            references: {
              model: "employee",
              key: "id",
            }
          },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'appointments',
    }
)

module.exports = Appointments