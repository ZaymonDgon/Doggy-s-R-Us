const sequelize = require("../config/connection");
const {
  User,
  Appointments,
  Company,
  Employee,
  Packages,
  Pet,
  Role,
} = require("../models/");

const userData = require("./userData.json");
// const appointmentsData = require("./appointmentsData.json");
const companyData = require("./companyData.json");
const employeeData = require("./employeeData.json");
const packagesData = require("./packagesData.json");
const petData = require("./petData.json");
const roleData = require("./roleData.json");

const seedUser = async () => {
  await User.bulkCreate(userData);
};
// const seedAppointments = async () => {
//   await Appointments.bulkCreate(appointmentsData);
// };
const seedCompany = async () => {
  try{
    await Company.bulkCreate(companyData);
  } catch (err){
    console.log(err)
  }
};
const seedEmployee = async () => {
  try {
    await Employee.bulkCreate(employeeData);

  } catch (error) {
    console.log(error)
  }
};
const seedPackages = async () => {
  try {
    await Packages.bulkCreate(packagesData);
  } catch (error) {
    console.log(error)
  }
};
const seedPet = async () => {
  try {
    await Pet.bulkCreate(petData);
  } catch (error) {
    console.log(error)
  }
};
const seedRole = async () => {
  try {
    await Role.bulkCreate(roleData);
  } catch (error) {
    console.log(error)
  }
};
const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });
    seedUser();
    //---needs fix-----
    // seedAppointments();
    //-----------------
    seedCompany();
    seedEmployee();
    seedPackages();
    seedPet();
    //---needs fix------
    // seedRole();
    //------------------
  } catch (error) {
    console.log(error)
  }
  process.exit();  
};

seedDatabase();
