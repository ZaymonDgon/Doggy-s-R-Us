const sequelize = require("../config/connection");
const {
  Customer,
  Appointment,
  Company,
  Pet,
} = require("../models/");

const customerData = require("./customerData.json");
const appointmentData = require("./appointmentData.json");
const companyData = require("./companyData.json");
const petData = require("./petData.json");

const seedCustomer = async () => {
  await Customer.bulkCreate(customerData);
};
 const seedAppointment = async () => {
  await Appointment.bulkCreate(appointmentData);
 };
const seedCompany = async () => {
  try{
    await Company.bulkCreate(companyData);
  } catch (err){
    console.log(err)
  }
};
const seedPet = async () => {
  try {
    await Pet.bulkCreate(petData);
  } catch (error) {
    console.log(error)
  }
};
const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });
    seedCustomer();
    //---needs fix-----
    seedAppointment();
    //-----------------
    seedCompany();
    seedPet();
    //---needs fix------
    //------------------
  } catch (error) {
    console.log(error)
  }
  process.exit();  
};

seedDatabase();
