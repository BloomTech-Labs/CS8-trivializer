const express = require("express");
const router = require("express").Router();
const User = require("./userModel.js");

//var query = { name: 'borne' };
//Model.findOneAndUpdate(query, { name: 'jason bourne' }, options, callback)


router
    .route('/update')
    .get((req,res) => {
      console.log("whats up dude");
      res.status(200).json({"whats up": "dude"});
    })
    // .put((req, res) => {
    //   const {email} = req.body;
    //   const settings = req.body;

    //   User.findOneAndUpdate({email})
    // });
module.exports = router;
