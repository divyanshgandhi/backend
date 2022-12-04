const db = require("../models");
const List = db.list;
const Op = db.Sequelize.Op;

// Retrieve all Lists from the DB for current user using a user ID
exports.findAll = (req, res) => {
  
};

// Find a single List of Todos using a List ID
exports.findOne = (req, res) => {
  
};

// Create and save a new List item to the DB
exports.create = (req, res) => {

  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  
};


// Update a List using a List ID from request and the updated List item
exports.update = (req, res) => {
  
};

// Delete an entire List using a List ID from request
exports.delete = (req, res) => {
  
};
