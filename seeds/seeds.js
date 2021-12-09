const sequelize = require("../config/connection");
const {
  Customer,
  Appointment,
  Company,
  Pet,
} = require("../models/");

const customerData = require("./customerData");
const appointmentData = require("./appointmentData");
const companyData = require("./companyData");
const petData = require("./petData");
console.log("hi welcome to the mess")
const seedAll = async () => {
  try {
    await sequelize.sync({ force: true });
    await companyData();//working
    console.log("Company seeded...")
    await customerData();//customer works
    console.log("Customers seeded...")
    await petData();// working now
    console.log("Pets seeded...")
    await appointmentData();//yay it works
    console.log("Appointments seeded...")
    process.exit(0);
  }
  catch (err) {
    console.log(err)
  }
};
seedAll();



