const Customer =  require('./Customer');
const Pet =  require('./Pet');
const Company =  require('./Company');
const Appointment =  require('./Appointment');
const { application } = require('express');


Customer.hasMany(Pet, {
  foreignKey: 'customer_id',
  onDelete: 'CASCADE'
});
Pet.belongsTo(Customer, {
    foreignKey: 'customer_id',
    onDelete:"CASCADE"
});

// Customer.hasMany(Appointment, {
//     foreignKey: 'customer_id',
//     onDelete: 'CASCASDE'
// });
// Appointment.belongsTo(Customer, {
//   foreignKey: 'customer_id'
// });


// Company.hasMany(Customer, {
//   foreignKey: 'company_id',
//   onDelete: 'CASCADE'
// });
// Customer.belongsTo(Company, {
//   foreignKey: 'company_id',
//   onDelete: 'CASCADE'
// });
//------------------------------------
//stick with singular or plural not both
//------------------------------------
Company.hasMany(Appointment, {
  foreignKey: 'company_id',
  onDelete: 'CASCADE'
})
Appointment.belongsTo(Company, {
  foreignKey: 'company_id',
  onDelete: 'CASCADE'
})
Customer.hasMany(Appointment, {
  foreignKey:'id',
  onDelete: 'CASCADE'
  
})
Appointment.belongsTo(Customer, {
  foreignKey:'customer_id',
  onDelete: 'CASCADE'
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




module.exports = { Customer, Pet, Company, Appointment};