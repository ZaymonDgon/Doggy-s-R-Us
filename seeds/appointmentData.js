const { Appointment } = require("../models")

const appointmentArray = [
    {
        "name": "Larry",
        "employee_id": "1",
        "company_id": "1"
    },
    {
        "name": "Larry",
        "employee_id": "1",
        "company_id": "1"
    }
]
const appointmentData = () => Appointment.bulkCreate(appointmentArray)
module.exports = appointmentData;