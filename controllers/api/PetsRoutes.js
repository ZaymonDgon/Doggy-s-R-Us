const router = require("express").Router();
const { Pet } = require("../../models/Pet");
const { User } = require("../../models/Customer");
const { Appointment } = require("../../models/Appointment");
const { Company } = require("../../models/Company");
const { Employee } = require("../../models/Employee");
const { Package } = require("../../models/Package");
const { Role } = require("../../models/Role");
const { Router } = require("express");
const withAuth = require('../../util/auth');
// create a pet for a user
router.post("/createPet",withAuth, async (req, res) => {
  try {
    const petData = await Pet.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(petData)
  } catch (err) {
    res.statusMessage(400).json(err);
  }
});
// delete pet for user
router.delete("/removePet",withAuth, async (req, res) => {
  try {
    const petData = await Pet.destory({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
  } catch (err) {
    res.statusMessage(400).json(err);
  }
});
// update pets for user
router.put("/updatePet", withAuth, async (req, res) => {
  const petData = await Pet.findByPk({
    where: {
      id: req.params.id,
    },
  });
});
// see all pets currently in system
router.get("/allPets", withAuth, async (req, res) => {
    try {
        const petData = await Pet.findAll({
            include: {
                model: 'pets',
                attribute: ['name']
            }
        })
    } catch (err) {
        res.status(400).json(err)
        
    }
});
module.exports = router;
