const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');

// ROUTE 1: Create a user using POST "/api/auth"
router.post(
  '/',
  [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be at least 5 characters').isLength({ min: 5 })
  ],
  async (req, res) => {
    const result = validationResult(req);

    if (!result.isEmpty()) {
      return res.status(400).json({ errors: result.array() });
    }

    try {
      // check whether the user with this email already exists
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({ error: 'Sorry, a user with this email already exists' });
      }

      // create new user
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });

      res.json(user);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Internal Server Error');
    }
  }
);

module.exports = router;