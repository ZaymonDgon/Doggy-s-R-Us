const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Pet extends Model {}

Pet.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        breed: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        sex: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        spade: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        weight: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        birth_year: {
            type: DataTypes.INTEGER,
            // add the date format from sequel
            allowNull: true,
        },
        medication: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        vet_info: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        color_markings: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        photo: {
            // we'll search some shit later lol
        },
        customer_id: {
            type: DataTypes.STRING,
            references: {
                model: 'user',
                key: 'id',
            }
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'pet',
    }
)

module.exports = Pet;
