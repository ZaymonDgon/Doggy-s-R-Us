const router = require("express").Router();
const { Pet } = require("../../models/Pet")
const { User } = require("../../models/user")
const {Appointment } = require("../../models/Appointment")
const { Company } = require("../../models/Company")
const { Employee } = require("../../models/Employee")
const { Package } = require("../../models/Package")
const { Role } = require("../../models/Role")

// landing pages routing 
// router.get('/', async (req,res) => {
//     try{
//         const 
//     }
// })
router.get('/user/:id', async (req,res) => {
    try {
        const userData = await User.findByPk({
            where:{
                id:req.params.id
            }
        })
        res.status(200).json(userData);
    } catch (err) {
        res.status(400).json(err);
    }
})
router.get('/user/pets', async (req,res) => {
    try{
        const petData = await 
    }catch (err){
        res.status(400).json(err)
    }
})
// all major gets request handled here