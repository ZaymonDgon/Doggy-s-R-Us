const router = require("express").Router();
const { Pet , Customer, Appointment, Company } = require("../../models")
//const auth = require("../../util/auth")
// login in
// create a booking
router.post("/", async (req, res) => {
  try {
    const createAppointment = await Appointment.create({
      // appointment model request code insert here
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(createAppointment);
  } catch (err) {
    res.status(400).json(err);
  }
});

// update a specific booking
router.put("/:id", async ({ body, params }, res) => {
  try {
    const appointmentData = await Appointment.update( body, {
      where: {
        id: params.id,
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
router.delete("/:id", async (req, res) => {
  try {
    const deleteApp = await Appointment.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
    res.statusMessage('Deleted Booking')

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
// get a specific booking
router.get("/:id", async (req, res) => {
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

module.exports = router
