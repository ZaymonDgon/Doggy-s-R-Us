const { Customer } = require("../models")

const customerArray = [
    {
        first_name:"Paul",
        last_name: "Blart",
        phone_number:"8045679812",
        email: "mallcopstar@hotmail.com",
        address:"25660 spruce st",
        city: "Arvada",
        state: "Colorado",
        password:"DougnutsYum"
    },
    {
        first_name:"Andy",
        last_name: "Baker",
        phone_number:"4387456635",
        email: "Iskialot@gmail.com",
        address:"235 airplane dr",
        city: "Arvada",
        state: "Colorado",
        password:"Powerdays"
    },
    {
        first_name:"Susan",
        last_name: "Redfern",
        phone_number:"8045679812",
        email: "susanr@hotmail.com",
        address:"428 88th st",
        city: "Arvada",
        state: "Colorado",
        password:"Ilovemydog"
    }
    
]
const customerData = () => Customer.bulkCreate(customerArray);
module.exports = customerData;