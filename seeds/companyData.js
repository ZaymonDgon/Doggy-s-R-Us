const { Company } = require("../models")

const companyArray = [
    {
        id: 1,
        building_name: "DoggysRus",
        address: "285 Loggers ln",
        city: "Denver",
        state: "Colorado"
    }
]
const companyData = () => Company.bulkCreate(companyArray)
module.exports = companyData;