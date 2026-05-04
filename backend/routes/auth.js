const express = require('express');
const User = require('../models/User');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser')
const JWT_SECRET = "Rajakumarisagoodboy$";

// ROUTE 1: Create a user using POST "/api/auth/createuser"
router.post(
  '/createuser',
  [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be at least 5 characters').isLength({ min: 5 })
  ],
  async (req, res) => {
    let success = false;
    const result = validationResult(req);

    if (!result.isEmpty()) {
      success = false;
      return res.status(400).json({ success , errors: result.array() });
    }

    try {
      let user = await User.findOne({ email: req.body.email });

      if (user) {
        success = false;
        return res.status(400).json({ success , error: 'Sorry, a user with this email already exists' });
      }

      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);

      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass
      });

      const data = {
        user: {
          id: user.id
        }
      };

      const authtoken = jwt.sign(data, JWT_SECRET);
      success = true;
      res.json({ success , authtoken });

    } catch (error) {
      console.error(error.message);
      res.status(500).send('Internal Server Error');
    }
  }
);

// ROUTE 2: Login user using POST "/api/auth/login"
router.post(
  '/login',
  [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must not be blank').exists()
  ],
  async (req, res) => {
    const result = validationResult(req);
    let success = false;

    if (!result.isEmpty()) {
      return res.status(400).json({ errors: result.array() });
    }

    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (!user) {
        success = false;
        return res.status(400).json({success ,  error: 'Please try to enter the correct credentials' });
      }

      const passwordCompare = await bcrypt.compare(password, user.password);

      if (!passwordCompare) {
        success = false;
        return res.status(400).json({ success , error: 'Please try to enter the correct credentials' });
      }

      const data = {
        user: {
          id: user.id
        }
      };

      const authtoken = jwt.sign(data, JWT_SECRET);
      success = true;
      res.json({ success , authtoken });

    } catch (error) {
      console.error(error.message);
      res.status(500).send('Sorry error occurred');
    }
  }
);

// ROUTE 3: Get loggedin user details using: POST "/api/auth/getuser"
router.post('/getuser', fetchuser, async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Sorry error occurred');
  }
});

module.exports = router;