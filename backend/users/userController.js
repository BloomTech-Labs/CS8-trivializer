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
    const settings = req.body;
    let { hashedPassword } = req.body;
    let {oldPassword} = req.body.formProps;

    const user = User.findById(id);

    console.log("FORMPROPS", req.body.formProps);
    
    console.log("HASHEDPW", hashedPassword);
    // console.log("OLDPW", req.body.formProps.oldPassword);
    console.log("oldpassword", oldPassword);
    console.log("ID", id);
  

    const matched = bcrypt.compareSync(oldPassword, hashedPassword);
    console.log(matched);

    // if(oldPassword === password) {

    // }

    // if(password === undefined || null) {
    //   res.json({"put in a got damn password": "please"})
    // }
   
    User.findByIdAndUpdate(id, settings)
      .then(updated => {
        if (updated === null) {
          res.status(404).json(updated);
        } else {
          res.status(200).json(updated);
        }
      })
      .catch(err => {
        res.status(500).json("error updating user information", err);
      });
  });
module.exports = router;
