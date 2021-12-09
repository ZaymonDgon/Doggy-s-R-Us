const router = require("express").Router();
const { Pet } = require("../../models/Pet");
const { User } = require("../../models/user");
const { Appointment } = require("../../models/Appointment");
const { Company } = require("../../models/Company");
const { Employee } = require("../../models/Employee");
const { Package } = require("../../models/Package");
const { Role } = require("../../models/Role");

// create a booking
router.post("/bookings", auth, (req, res) => {
  try {
    const createAppointment = await User.create({
      // appointment model request code insert here
      ...req.body,
      user_id: req.session.user_id,
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// update a specific booking
router.put("/bookings/:id", async (req, res) => {
  try {
    const appointmentData = await Appointment.update({
      employe_id: req.params.employee_id ,
      time:  req.params.time
       
    },{
      where: {
        id: req.params.id,
      }
    })
    res.status(200).json(appointmentData);
  } catch (err) {
    res.status(400).json(err)
  }
  // e.g. change the booking time
  // e.g. change the dog
  // e.g. change the package
});

// bonus: the best practice is to NEVER delete your data b/c you always want to keep track of history
// for example, when canceling a booking, rather than Appointment.destroy, which would delete the row in the database
// you could just update a field on that model, e.g. appointment.canceled = true; appointment.active = false
//
// but in real world problem solving, we use something called state transition / state machine tables
// Appointment table
// ApointmentStateChange table
// - appointment_id
// - user_id
// - previous_state (active)
// - next_state (canceled)
// - timestamp

// cancel a booking
router.delete("/bookings/:id", async (req, res) => {
  try {
    const deleteApp = await Appointment.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!deleteApp) {
      res.status(404).json({ message: "Cannot delete appointment loser" });
      return;
    }

    res.status(200).json(deleteApp);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get all bookings
router.get("/bookings", async (req, res) => {
  const bookingData = await Appointment.findAll();
});

// get a specific booking
router.get("/bookings/:id", async (req, res) => {
  try {
    //
    const bookingData = await Appointment.findByPk({
      where: {
        id: req.body.id,
        user_id: req.session.user_id,
      },
    });
    res.status(200).json(bookingData);
  } catch (err) {
    res.status(400).json(err);
  }
});
