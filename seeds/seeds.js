const sequelize = require("../config/connection");
const { User, Appointments, Company, Employee, Packages, Pet, Role } = require("../models/");

const userData = require("./userData.json");
const appointmentsData = require("./appointmentsData.json");
const companyData = require("./companyData.json");
const employeeData = require("./employeeData.json");
const packagesData = require("./packagesData.json");
const petData = require("./petData.json");
const roleData = require("./roleData.json");

const seedUser = async () => {
  await User.bulkCreate(userData);
};
const seedAppointments = async () => {
  await Appointments.bulkCreate(appointmentsData);
};
const seedCompany = async () => {
  await Company.bulkCreate(companyData);
};
const seedEmployee = async () => {
 await Employee.bulkCreate(employeeData);
};
const seedPackages = async () => {
 await Packages.bulkCreate(packagesData);
};
const seedPet = async () => {
 await Pet.bulkCreate(petData);
};
const seedRole =async  () =>{
 await   Role.bulkCreate(roleData);
}
const seedDatabase = () => {
 seedUser();
appointmentsData();
companyData();
employeeData();
packagesData();
petData();
roleData();
process.exit();
}
seedDatabase();