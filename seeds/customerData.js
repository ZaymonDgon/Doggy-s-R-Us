const { Customer } = require("../models")

const customerArray = [
    {
        first_name:"Paul",
        last_name: "Blart",
        // phone_number:"8045679812",
        email: "mallcopstar@hotmail.com",
        address:"25660 spruce st",
        city: "Arvada",
        state: "Colorado",
        password:"$2b$10$np5jX7gu8L4j2wsGceszI.Yz9UxV2zkVyGDzFBhvWHcs7a05gSbjW",
        company_id: 1
    },
    {
        first_name:"Andy",
        last_name: "Baker",
        // phone_number:"4387456635",
        email: "Iskialot@gmail.com",
        address:"235 airplane dr",
        city: "Arvada",
        state: "Colorado",
        password:"$2b$10$np5jX7gu8L4j2wsGceszI.Yz9UxV2zkVyGDzFBhvWHcs7a05gSbjW",
        company_id: 1
    },
    {
        first_name:"Susan",
        last_name: "Redfern",
        // phone_number:"8045679812",
        email: "susanr@hotmail.com",
        address:"428 88th st",
        city: "Arvada",
        state: "Colorado",
        password:"$2b$10$np5jX7gu8L4j2wsGceszI.Yz9UxV2zkVyGDzFBhvWHcs7a05gSbjW",
        company_id: 1
    }
    
]
const customerData = () => Customer.bulkCreate(customerArray);
module.exports = customerData;