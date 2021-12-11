const router = require("express").Router();
const { Pet, Customer, Appointment, Company } = require("../models");
const auth = require('../util/auth');

router.get('/', async (req, res) => {
    try {
        const appointmentData = await Appointment.findAll({
            include: [
                {
                    model: Customer,
                    attributes: ['first_name'],
                },
            ],
        });
        const appointments = appointmentData.map((appointment) => appointment.get({ plain: true }));

        res.render('homepage', {
            appointments,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});



// router.get('/', async (req,res) => {
//     try {
//         const customerData = await Customer.findByPk({
//             where:{
//                 id:req.params.id
//             }
//         })
//         res.status(200).json(customerData);
//     } catch (err) {
//         res.status(400).json(err);
//     }
// })
// router.get('/', async (req,res) => {
//     res.render('homepage' , customerData)
// })
module.exports = router;