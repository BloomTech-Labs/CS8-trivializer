const express = require("express");
const router = require("express").Router();
const User = require("./userModel.js");


router
    .route('/update')
    .get((req,res) => {
      console.log("whats up dude");
      res.status(200).json({"whats up": "dude"});
    })
    .put((req, res) => {
      const {token} = req.body;
      const settings = req.body;

      User.findByIdAndUpdate(token, settings)
        .then(updated => {
          if (updated === null) {
            res.status(404).json(updated)
          } else {
            res.status(200).json(updated)
          }
        })
        .catch(err => {
          res.status(500).json("error updating user information", err);
        })
    });
module.exports = router;
