const db = require("../models");
const Todo = db.todo;
const Op = db.Sequelize.Op;

// Retrieve all Todos from the DB for current user using a user ID
exports.findAll = (req, res) => {
  
};

//Retrieve all Todos from a specific list using a list ID
exports.findInList = (req, res) => {

};

// Find a single Todo using an ID
exports.findOne = (req, res) => {
    const id = req.params.id;

    // Find a Todo with an ID
    Todo.findByPk(id)
        .then(data => {
        if (data) {
            res.send(data);
        } else {
            res.status(404).send({
            message: `Cannot find Todo with id=${id}.`
            });
        }
        })
        .catch(err => {
        res.status(500).send({
            message: "Error retrieving Todo with id=" + id
        });
        });
  
};

// Create and save a new Todo item to the DB
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
        res.status(400).send({
        message: "Content can not be empty!"
        });
        return;
    }

    // Create a Todo
    const todo = {
        title: req.body.title,
        description: req.body.description,
        completed: req.body.completed ? req.body.completed : false,
        list_id: req.body.list_id,
        user_id: req.body.user_id,
        created_at: req.body.created_at,
        updated_at: req.body.updated_at,
    };

    // Save Todo in the database
    Todo.create(todo)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occurred while creating the Todo."
            });
        });
};


// Update a Todo using an ID from request and the updated Todo item
exports.update = (req, res) => {
  
};

// Delete a Todo using an ID from request
exports.delete = (req, res) => {
  
};
