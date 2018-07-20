const express = require("express");
const bcrypt = require("bcrypt");
const router = require("express").Router();
const User = require("./userModel.js");

router
  .route("/update")
  // .get((req, res) => {
  //   console.log("whats up dude");
  //   res.status(200).json({ "whats up": "dude" });
  // })
  .put((req, res) => {
    const { id } = req.body;
    const settings = req.body.formProps;
    let { hashedPassword } = req.body;
    let { oldPassword, password } = req.body.formProps;

    let matched = null;

    if(oldPassword === undefined || hashedPassword === undefined) {
      matched = false;
    } else {
      matched = bcrypt.compareSync(oldPassword, hashedPassword);
    }


    if (oldPassword === undefined || password === undefined) {
      User.findByIdAndUpdate(id, settings)
        .then(updated => {
          if (updated === null) {
            res.status(404).json(updated);
          } else {
            console.log("UPDATED", updated);
            res.status(200).json(updated);
          }
        })
        .catch(err => {
          res.status(500).json("error updating user information", err);
        });
    }

    if (matched) {
      User.findByIdAndUpdate(id, settings)
        .then(updated => {
          if (updated === undefined) {
            res.status(404).json(updated);
          } else {
            console.log("UPDATED PASSWORD", updated);
            updated.save();
            console.log("UPDATED PASSWORD AFTER SAVE", updated);
            res.status(200).json(updated);
          }
        })
        .catch(err => {
          res.status(500).json("error updating user information", err);
        });
    }

    // if(password === undefined || null) {
    //   res.json({"put in a got damn password": "please"})
    // }
  });
module.exports = router;
