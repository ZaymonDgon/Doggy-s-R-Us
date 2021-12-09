const { Appointment } = require("../models")

const appointmentArray = [
    {
        time: "8",
        customer_id:"1",
        company_id: "1",
    },
     {
            time: "9",
            customer_id:"2",
            company_id: "1",
    }]
    
const appointmentData = () => Appointment.bulkCreate(appointmentArray)
module.exports = appointmentData;