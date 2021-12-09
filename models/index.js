const Customer =  require('./Customer');
const Role =  require('./Role');
const Pet =  require('./Pet');
const Packages =  require('./Packages');
const Employee =  require('./Employee');
const Company =  require('./Company');
const Appointments =  require('./Appointments');
const { application } = require('express');


Customer.hasMany(Pet, {
  foreignKey: 'customer_id',
  onDelete: 'CASCADE'
});
Pet.belongsTo(Customer, {
    foreignKey: 'customer_id'
});

// Customer.hasMany(Appointments, {
//     foreignKey: 'customer_id',
//     onDelete: 'CASCASDE'
// });
// Appointments.belongsTo(Customer, {
//   foreignKey: 'customer_id'
// });

Employee.hasMany(Appointments, {
  foreignKey: 'employee_id',
  onDelete: 'CASCADE'
});
Appointments.belongsTo(Employee, {
  foreignKey: 'employee_id'
});

Appointments.hasOne(Packages, {
  foreignKey: 'app_id',
  onDelete: 'CASCADE'
});
Packages.belongsTo(Appointments, {
  foreignKey: 'app_id'
});
//---------rip code---------------
// Company.hasMany(Employee, {
//   foreignKey: 'company_id',
//   onDelete: 'CASCADE'
// });
// Employee.belongsTo(Company, {
//   foreignKey: 'company_id'
// });
//---------------------------------
Company.hasMany(Customer, {
  foreignKey: 'company_id',
  onDelete: 'CASCADE'
});
Customer.belongsTo(Company, {
  foreignKey: 'company_id'
});
//------------------------------------
//stick with singular or plural not both
//------------------------------------
Company.hasMany(Appointments, {
  foreignKey: 'company_id'
})
Appointments.belongsTo(Company, {
  foreignKey: 'company_id'
})

// Company.hasMany(Pet, {
//   foreignKey: 'company_id',
//   onDelete: 'CASCADE'
// });
// Pet.belongsTo(Company, {
//   foreignKey: 'company_id'
// });
//maybe later we can add more depending on errs or bugs
//por si las moscas




module.exports = { Customer, Role, Pet, Packages, Employee, Company, Appointments};