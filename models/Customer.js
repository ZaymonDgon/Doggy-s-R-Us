const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class Customer extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

Customer.init(
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
        // phone_number: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        // },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            // validate:
            //  {
            //     isEmail: true
            // }
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
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8],
            },
        }
        // ,
        // company_id: {
        //     references:{
        // model:['company'],
        // key: 'id'
        //     } 
        // }
    },
    {
        hooks: {
            beforeCreate: async (newCustomerData) => {
                newCustomerData.password = await bcrypt.hash(newCustomerData.password, 10);
                return newCustomerData;
            },
            beforeUpdate: async (updatedCustomerData) => {
                if (updatedCustomerData.password) {
                    updatedCustomerData.password = await bcrypt.hash(updatedCustomerData.password, 10);
                }
                return updatedCustomerData;
            }},
            sequelize,
            timestamps: false,
            freezeTableName: true,
            underscored: true,
            modelName: 'customer',
        }
)


module.exports = Customer;
