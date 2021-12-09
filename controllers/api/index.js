const router = require("express").Router();
const petData = require("../../models/Pet")
const userData = require("../../models/Customer")
const bookingsData = require("../../models/Appointment")
const companyData = require("../../models/Company")
const employeeData = require("../../models/Employee")
const packageData = require("../../models/Package")
const roleData = require("../../models/Role")
// const sequelize = require('../../config/connection')
router.use('/pets',petData);
router.use('/users', userData);
router.use('/bookings', bookingsData);
router.use('/company', companyData);
router.use('/employees', employeeData);
router.use('/packages', packageData);
router.use('/roles',roleData)
module.exports = router;