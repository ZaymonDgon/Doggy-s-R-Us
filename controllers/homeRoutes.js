const router = require("express").Router();
const res = require("express/lib/response");
const { UPSERT } = require("sequelize/dist/lib/query-types");
const { Pet, Customer, Appointment, Company } = require("../models");
const auth = require("../util/auth");

router.get("/", async (req, res) => {
  console.log(req.session);
  try {
    const appointmentData = await Appointment.findAll({
      include: [
        {
          model: Customer,
          attributes: ["first_name"],
        },
      ],
    });
    const appointments = appointmentData.map((appointment) =>
      appointment.get({ plain: true })
    );

    res.render("homepage", {
      appointments,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/customerDashboard", async (req, res) => {
  try {
    const findCustomer = await Customer.findOne({
      where: {
        email : req.session.email}, 
      attributes: { exclude: ["password"] }
    });
    const customer = await findCustomer.get({ plain: true });
    res.render("customer", {
      ...Customer,
      logged_in: true,
    });
  } catch (error) {
      console.log(error)
      console.log("/customerDashboard try catch fail")
    res.status(400).json(toString(error));
  }
});

// router.get('/bookings', async (req, res) => {
//     // try {
//     //     const appointmentData = await Appointment.findAll({
//     //         include: [
//     //             {
//     //                 model: Appointment,
//     //                 attributes: ['first_name'],
//     //             },
//     //         ],
//     //     });
//     //     const appointments = appointmentData.map((appointment) => appointment.get({ plain: true }));

//     res.render('appointment')
//         // , {
//         //     appointments,
//         //     logged_in: req.session.logged_in
//         // });
// // }
//     // catch (err) {
//     //     res.status(500).json(err);
//     // }
// });

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

router.get("/bookings/:id", async (req, res) => {
  console.log("sid");
  try {
    const appointmentData = await Appointment.findByPk(req.params.id, {
      include: [
        {
          model: Customer,
        },
        // {
        //     model: Company,
        //     attributes: ['id'],
        // },
      ],
    });
    const appointment = appointmentData.get({ plain: true });
    console.log(appointment);
    res.render("appointment", {
      ...appointment,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", async (req, res) => {
  res.render("login");
});
router.get("/signup", async (req, res) => {
  res.render("signUp");
});

module.exports = router;
