const express = require("express");
const router = require("express").Router();
const User = require("./userModel.js");
router.post("/register", (req, res) => {
  const credentials = req.body;
  const user = new User(credentials);
  user
    .save()
    .then(inserted => {
      res.status(201).json(inserted);
    })
    .catch(err => res.status(500).json(err));
});

//var query = { name: 'borne' };
//Model.findOneAndUpdate(query, { name: 'jason bourne' }, options, callback)


router
    .route('/update')
    .get('/update', (req,res) => {
      res.status(200).json({"whats up": "dude"});
    })
    // .put((req, res) => {
    //   const {email} = req.body;
    //   const settings = req.body;

    //   User.findOneAndUpdate({email})
    // });
module.exports = router;
