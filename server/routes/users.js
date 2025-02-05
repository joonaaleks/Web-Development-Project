let express = require('express');
let router = express.Router();
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const { body, validationResult } = require("express-validator");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const validateToken = require("../auth/validateToken.js")
const multer = require("multer")
const storage = multer.memoryStorage();
const upload = multer({ storage })

//Register POST route
router.post('/users/register',
  //Set requirements for POST body
  body("username").isLength({ min: 3 }).escape(),
  body("email").isEmail().trim().escape(),
  body("password").isLength({ min: 5 }),

  async (req, res, next) => {
    const errors = validationResult(req);
    console.log(errors)
    if (req.body.username.length < 3 || req.body.password.length < 5) {
      return res.status(400).send(false)
    } else if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    await User.findOne({ email: email }).then((user) => {
      //If user email is already in the database, respond with an error
      if (user) {
        return res.status(403).json({ message: "Email already in use" });
      } else {
        //Hash the password
        bcrypt.genSalt(10, function (err, salt) {
          bcrypt.hash(password, salt, (err, hash) => {
            //Make new user into the database and save it
            const newUser = new User(
              {
                username: username,
                email: email,
                password: hash
              },
              (err, ok) => {
                if (err) throw (err)
              }
            )
            newUser.save().then(() => {
              return res.send(true)
            }).catch((err) => {
              console.log(err)
            })
          });
        });
      }
    }).catch((error) => {
      throw error
    })
  });


//Login POST route
router.post('/users/login',
  upload.none(),
  async (req, res, next) => {
    await User.findOne({ username: req.body.username }).then((user) => {
      //If user is not found in the database, the login fails
      if (!user) {
        return res.status(403).json({ message: "Login failed" })
      } else {
        //If user is found, then compare the users password and given password
        bcrypt.compare(req.body.password, user.password, (err, found) => {
          if (found) {
            //Make jwt
            const jwtPayload = {
              id: user._id,
              username: user.name
            }
            jwt.sign(
              jwtPayload,
              process.env.SECRET,
              {
                expiresIn: 180
              },
              (err, token) => {
                if (err) throw (err)
                //Respond with jwt token
                res.json({ success: true, token });
              }
            );
          } else {
            res.status(403).json({ message: "Wrong password" })
          }
        })
      }
    })
  });



module.exports = router;
