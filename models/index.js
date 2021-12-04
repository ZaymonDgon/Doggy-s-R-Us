const { User, Role, Pet, Packages, Employee, Company, Appointments } = require('../models');
const User =  require('./User');
const Role =  require('./Role');
const Pet =  require('./Pet');
const Packages =  require('./Packages');
const Employee =  require('./Employee');
const Company =  require('./Company');
const Appointments =  require('./Appointments');


User.hasMany(Pet, {
  foreignKey: 'customer_id',
  onDelete: 'CASCADE'
});
Pet.belongsTo(User, {
    foreignKey: 'customer_id'
});
User.hasMany(Appointments, {
    foreignKey: 'customer_id',
    onDelete: 'CASCASDE'
});



module.exports = { User, Role, Pet, Packages, Employee, Company, Appointments};