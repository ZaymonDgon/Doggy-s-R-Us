const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Employee extends Model { }

Employee.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        manager_id: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        employee_role: {
            type: DataTypes.STRING,
            references: {
                model: 'role',
                key: 'id',
            }
        },
        company_id: {
            type: DataTypes.STRING,
            references: {
                model: 'company',
                key: 'id',
            }
        },
        // role_id: {
        //     type: DataTypes.STRING,
        //     references: {
        //         model: 'role',
        //         key: 'id',
        //     }
        // },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'employee',
    }
)

module.exports = Employee;