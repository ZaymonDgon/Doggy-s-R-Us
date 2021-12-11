const router = require("express").Router();
const { Pet } = require("../../models");
// login in
//const withAuth = require('../../util/auth');
// create a pet for a user
router.post("/", async (req, res) => {
  try {
    const petData = await Pet.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(petData);
  } catch (err) {
    res.status(400).json(err);
  }
});
// delete pet for user
router.delete("/:id", async (req,res) => {
  try {
    const petData = await Pet.destory({
      where: {
        id: req.params.id,
        // user_id: req.session.user_id,
      },
    });
    if (!petData) {
      res.status(404).json({ message: "Cannot delete pet loser" });
      return;
    }
    res.status(200).json(petData);
  } catch (err) {
    res.status(400).json(err);
  }
});
// update pets for user
router.put("/:id", async (req, res) => {
  try {
    const petData = await Pet.findByPk({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(petData);
  } catch (err) {
    res.status(400).json(err);
  }
});
// see all pets currently in system
router.get("/:id", async (req, res) => {
  try {
    const petData = await Pet.findAll({
      include: {
        model: Pet,
        attribute: ["name"],
      },
    });
    res.status(200).json(petData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// router.get('/pets', async (req,res) => {
//   try{
//       const petData = await
//   }catch (err){
//       res.status(400).json(err)
//   }
// })
module.exports = router;
