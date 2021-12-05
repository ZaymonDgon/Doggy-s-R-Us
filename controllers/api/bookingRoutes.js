const router = require("express").Router();
const { Pet } = require("../../models/Pet")
const { User } = require("../../models/user")
const {Appointment } = require("../../models/Appointment")
const { Company } = require("../../models/Company")
const { Employee } = require("../../models/Employee")
const { Package } = require("../../models/Package")
const { Role } = require("../../models/Role")

// book appointment
router.post('/booking', auth, (req, res) => {
    try {
        const createAppointment = await User.create(
        // appointment model request code insert here
            
        )
    
    } catch (err) {
        res.status(400).json(err);
      }
});



// cancel appointment
router.delete('/delete/appointment/:id', async (req, res) => {
    try {
      const deleteApp= await User.destroy({
        where: {
          id: req.params.id
        }
      });
  
      if (!deleteApp) {
        res.status(404).json({ message: 'Cannot delete appointment loser' });
        return;
      }
  
      res.status(200).json(deleteApp);
    } catch (err) {
      res.status(500).json(err);
    }
});

// look at past bookings

