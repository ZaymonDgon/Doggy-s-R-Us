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
router.get('/', async (req,res) => {
    res.render('homepage')
})
module.exports = router;