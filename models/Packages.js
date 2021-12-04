const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Packages extends Model {}

Packages.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        packages_price: {
            type: DataTypes.INTEGER,
        },
        packages_detail: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'packages',
    }
)
    
module.exports = Packages;




