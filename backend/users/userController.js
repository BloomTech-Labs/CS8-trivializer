const express = require("express");
const router = require("express").Router();
const User = require('./userModel.js');

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

module.exports = router
