const router = require("express").Router();
const { Pet } = require("../../models/Pet")
const { User } = require("../../models/user")
const {Appointment } = require("../../models/Appointment")
const { Company } = require("../../models/Company")
const { Employee } = require("../../models/Employee")
const { Package } = require("../../models/Package")
const { Role } = require("../../models/Role")
const auth = require("../../util/auth")
// login in
router.post('/login', async (req, res) => {
    try {
        const userNameData = await User.findOne({
            where: {
                email: req.body.email,
            }
        })
        if (!userNameData){
            res.status(404).json({ message: 'No user found with this email!' });
            return;
        }
        
        const validatePassword = await userNameData.password(req.body.password);

        if (!validatePassword) {
            res.status(400).json({ message: 'Please enter a valid password' });
            return;
        }

        // need to add session code
         req.session.save(() => {
            req.session.userId = newUser.id;
            req.session.userName = newUser.username;
            req.session.loggedIn = true;
            res.status(200).json(userNameData);
        })
         
    }catch (err) {
        res.status(500).json(err);
      }
})

// logout
router.post('/logout', auth, (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(()  => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

// create/signup
router.post('/signup', async (req, res) => {
    console.log(req.body)
    try {
        const newUser = await User.create(
            // username: req.body.username,
            // email: req.body.email,
            // password: req.body.password,
            // all model prameters goes here
            req.body
        )
        req.session.save(() => {
            req.session.userId = newUser.id;
            req.session.userName = newUser.username;
            req.session.loggedIn = true;
            res.status(200).json(newUser);
        })

        // need to add session code
     
    } catch (err) {
      res.status(400).json(err);
    }
});

// update user profile
router.post('/update/:id', async (req, res) => {
    try {
      const updateUser= await User.findOne({
        where: {
          id: req.params.id
        }
      });
  
      if (!updateUser) {
        res.status(404).json({ message: 'Cannot delete user loser' });
        return;
        }
        // switch case if what you what to update
        // might need a document query selector to get what field we want to update
  
      res.status(200).json(updateUser);
    } catch (err) {
      res.status(500).json(err);
    }
});

// delete a user 
router.delete('/delete/:id', async (req, res) => {
    try {
      const deleteUser= await User.destroy({
        where: {
          id: req.params.id
        }
      });
  
      if (!deleteUser) {
        res.status(404).json({ message: 'Cannot delete user loser' });
        return;
      }
  
      res.status(200).json(deleteUser);
    } catch (err) {
      res.status(500).json(err);
    }
});

// display all users


