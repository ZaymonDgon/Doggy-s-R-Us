const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Role extends Model {}
Role.init(
    {
        id: {
            type: DataTypes.
        }

    }
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'employee',
    }
)

module.exports = Role