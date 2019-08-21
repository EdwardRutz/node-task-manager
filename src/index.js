'use strict';

// This file is the starting point for the API and contains the Express server


const express = require('express');
require('./db/mongoose.js');
const User = require('./models/user');
const Task = require('./models/task');

const app = express();
const port = process.env.PORT || 3001;

// Parse incoming data into an object
app.use(express.json());

// --- USERS ---
// Create a user
app.post('/users', (req, res) => {
    const user = new User(req.body);

    user.save().then(() => {
        res.status(201).send(user);
    }).catch((error) => {
        res.status(400);
        res.send(error)
    })
});

// --- TASKS ---
// Create a task
app.post('/tasks', (req, res) => {
    const task = new Task(req.body);

    task.save().then(() => {
        res.status(201).send(task);
    }).catch((error) => {
        res.status(400);
        res.send(error);
    })
});



app.listen(port, () => {
    console.log('Server is running on port ' + port)
});



// TODO:  Change the default port to 3000

