const { Pet } = require('../models')
const petArray = [
  {
    "name": "Hector",
    "breed": "Border Collie",
    "sex": "Male",
    "spade": true,
    "weight": "50",
    "birth_year": "2013",
    "medication": false,
    "customer_id": 1
  },
  {
    "name": "KoKo",
    "breed": "st. bernard",
    "sex": "Female",
    "spade": true,
    "weight": "120",
    "birth_year": "2016",
    "medication": false,
    "customer_id": 2
  },
  {
    "name": "Hector",
    "breed": "golden retriever",
    "sex": "Female",
    "spade": true,
    "weight": "50",
    "birth_year": "2013",
    "medication": false,
    "customer_id": 3
  }
]
const petData = () => Pet.bulkCreate(petArray)
module.exports = petData