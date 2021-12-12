const router = require("express").Router();
const { Pet, Customer, Appointment, Company } = require("../../models");
//const auth = require("../../util/auth")
// login in
router.post("/login", async (req, res) => {
  console.log(req.body);
  try {
    const customerNameData = await Customer.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (!customerNameData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
        return;
    }
    console.log("prepassword whoops");
    const validatePassword = customerNameData.checkPassword(
      await req.body.password
    );

    if (!validatePassword) {
      res.status(400).json({ message: "Please enter a valid password" });
      return;
    }
    console.log("post password shit");

    const customer = customerNameData.get({ plain: true });
    // console.log(customer);
    console.log(req.body);
    // need to add session code
    //THIS IS AREA WHERE WE NEED WORK SOMEWHERE BETWEEN POST PASSWORD SHIT AND SESSION
    console.log()
    req.session.save(() => {
      req.session.id = customer.id;
      req.session.email= customer.email;
      // req.session.first_name = customer.first_name;
      req.session.loggedIn = true;
    });
    res.status(200).json(customer);
    console.log(req.session);
  } catch (err) {
    res.status(500).json(err);
    console.log("/api/customer/login POST try catch fail");
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
      req.session.id = newCustomer.id;
      // req.session.email = newCustomer.email;
      // req.session.first_name = newCustomer.first_name;
      req.session.loggedIn = true;
    });
    res.status(200).json(newCustomer);
    // need to add session code
  } catch (err) {
    res.status(400).json(err);
  }
});

// update user profile
router.post("/:id", async (req, res) => {
  try {
    const updateCustomer = await Customer.update(
      { ...req.body },
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
