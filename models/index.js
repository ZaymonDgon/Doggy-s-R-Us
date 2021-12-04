const { User, Role, Pet, Packages, Employee, Company, Appointments } = require('../models');
const User =  require('./User');
const Role =  require('./Role');
const Pet =  require('./Pet');
const Packages =  require('./Packages');
const Employee =  require('./Employee');
const Company =  require('./Company');
const Appointments =  require('./Appointments');
const { application } = require('express');


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
Appointments.belongsTo(User, {
  foreignKey: 'customer_id'
});
Employee.hasMany(Appointments, {
  foreignKey: 'app_id',
  onDelete: 'CASCADE'
});
Appointments.belongsTo(Employee, {
  foreignKey: 'app_id'
});
Appointments.hasOne(Packages, {
  foreignKey: 'app_id',
  onDelete: 'CASCADE'
});
Packages.belongsTo(Appointments, {
  foreignKey: 'app_id'
});
Company.hasMany(Employee, {
  foreignKey: 'company_id',
  onDelete: 'CASCADE'
});
Employee.belongsTo(Company, {
  foreignKey: 'company_id'
});
Company.hasMany(User, {
  foreignKey: 'company_id',
  onDelete: 'CASCADE'
});
User.belongsTo(Company, {
  foreignKey: 'company_id'
});
// Company.hasMany(Pet, {
//   foreignKey: 'company_id',
//   onDelete: 'CASCADE'
// });
// Pet.belongsTo(Company, {
//   foreignKey: 'company_id'
// });
//maybe later we can add more depending on errs or bugs
//por si las moscas




module.exports = { User, Role, Pet, Packages, Employee, Company, Appointments};