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

  // Create a List
  const list = {
    title: req.body.title,
    description: req.body.description,
    todos: req.body.todos,
    user_id: req.body.user_id,
    created_at: req.body.created_at,
    updated_at: req.body.updated_at
  };

  // Save List in the database
  List.create(list)
    .then(data => {
      res.send(data);
    }
    )
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the List."
      });
    }
    );


};


// Update a List using a List ID from request and the updated List item
exports.update = (req, res) => {

};

//Empty a List of Todos using a List ID from request
exports.empty = (req, res) => {

};

// Delete an entire List using a List ID from request
exports.delete = (req, res) => {

};
