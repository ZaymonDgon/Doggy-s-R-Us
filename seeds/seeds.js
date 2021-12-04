const sequelize = require('../config/connection');
const {User} = require('../models/User');
const {Appointments} = require('../models/Appointments');
const {Company} = require('../models/Company');
const { Employee } = require('../models/Employee');
const { Packages } = require('../models/Packages');
const { Pet } = require('../models/Pet');
const { Role } = require('../models/Role');

const userData = require('./userData.json');
const appointmentsData = require('./appointmentsData.json');
const companyData = require('./companyData.json');
const employeeData = require('./employeeData.json');
const packagesData = require('./packagesData.json');
const petData = require('./petData.json');
const roleData = require('./roleData.json');
