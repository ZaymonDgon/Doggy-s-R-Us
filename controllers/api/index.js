const router = require("express").Router();
const petData = require("./petsRoutes")
const customerData = require("./customerRoutes")
const bookingsData = require("./appointmentRoutes")
// const sequelize = require('../../config/connection')
router.use('/pets',petData);
router.use('/customer', customerData);
router.use('/bookings', bookingsData);
module.exports = router;