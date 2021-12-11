const router = require("express").Router();
const petRoutes = require("./petRoutes");
const customerRoutes = require("./customerRoutes");
const appointmentRoutes = require("./appointmentRoutes");

router.use('/pets',petRoutes);
router.use('/customers', customerRoutes);
router.use('/appointments', appointmentRoutes);

module.exports = router;