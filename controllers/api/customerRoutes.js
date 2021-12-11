const router = require("express").Router();
const { Pet, Customer, Appointment, Company } = require("../../models");
//const auth = require("../../util/auth")
// login in
router.post("/login", async (req, res) => {
  try {
    const customerNameData = await Customer.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (!customerNameData) {
      res.status(404).json({ message: "No user found with this email!" });
      return;
    }

    const validatePassword = await customerNameData.checkPassword(
      req.body.password
    );

    if (!validatePassword) {
      res.status(400).json({ message: "Please enter a valid password" });
      return;
    }

    // need to add session code
    req.session.save(() => {
      req.session.userId = newCustomer.id;
      req.session.userName = newCustomer.username;
      req.session.loggedIn = true;
      res.status(200).json(customerNameData);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// logout
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// create/signup
router.post("/signup", async (req, res) => {
  console.log(req.body);
  try {
    const newCustomer = await Customer.create(
      // username: req.body.username,
      // email: req.body.email,
      // password: req.body.password,
      // all model prameters goes here
      req.body
    );
    req.session.save(() => {
      req.session.userId = newCustomer.id;
      req.session.userName = newCustomer.username;
      req.session.loggedIn = true;
      res.status(200).json(newCustomer);
    });

    // need to add session code
  } catch (err) {
    res.status(400).json(err);
  }
});

// update user profile
router.post("/:id", async (req, res) => {
  try {
    const updateCustomer = await Customer.update(
      {...req.body,},
      {
        where: {
          id: req.params.id,
        },
      }
    );

    if (!updateCustomer) {
      res.status(404).json({ message: "Cannot delete user loser" });
      return;
    }
    // switch case if what you what to update
    // might need a document query selector to get what field we want to update

    res.status(200).json(updateCustomer);
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete a user
router.delete("/:id", async (req, res) => {
  try {
    const deleteCustomer = await Customer.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!deleteCustomer) {
      res.status(404).json({ message: "Cannot delete user loser" });
      return;
    }

    res.status(200).json(deleteCustomer);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

// display all users
