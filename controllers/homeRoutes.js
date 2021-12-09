const router = require("express").Router();
const { Pet, Customer, Appointment, Company } = require("../models")


router.get('/:id', async (req,res) => {
    try {
        const customerData = await Customer.findByPk({
            where:{
                id:req.params.id
            }
        })
        res.status(200).json(customerData);
    } catch (err) {
        res.status(400).json(err);
    }
})
// router.get('/', async (req,res) => {
//     try{
//         const petData = await 
//     }catch (err){
//         res.status(400).json(err)
//     }
// })
// all major gets request handled here

module.exports = router;