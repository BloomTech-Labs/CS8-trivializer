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
    let { oldPassword, password, email, orgName } = req.body.formProps;

    let matched = null;

    console.log("PASSWORD:", password);
    console.log("HASHED OLD PASSWORD", hashedPassword);

    if(oldPassword === undefined || hashedPassword === undefined) {
      matched = false;
    } else {
      matched = bcrypt.compareSync(oldPassword, hashedPassword);
    }


    if (oldPassword === undefined || password === undefined) {
      User.findByIdAndUpdate(id, settings)
        .then(updated => {
          if (updated === undefined) {
            res.status(404).json(updated);
          } else {
            console.log("USER WITH NO PW CHANGE", updated);
            res.status(200).json(updated);
          }
        })
        .catch(err => {
          res.status(500).json("error updating user information", err);
        });
    }

    if (matched) {
      console.log("MATCHED", password);
      User.findByIdAndUpdate(id, password)
        .then(updated => {
          if (updated === undefined) {
            res.status(404).json(updated);
          } else {
            updated.save();
            console.log("USER ARE CALLING .SAVE", updated);
            // console.log("EMAIL PW ORGNAME", email, password, orgName);
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
