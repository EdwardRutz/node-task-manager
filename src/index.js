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
app.post('/users', async (req, res) => {
    const user = new User(req.body);

    // user.save().then(() => {
    //     res.status(201).send(user);
    // }).catch((error) => {
    //     res.status(400);
    //     res.send(error)
    // })
});

// Get a list of users
app.get('/users', (req,res) => {
    User.find({}).then((users) => {
        res.send(users)
    }).catch((error) => {
        res.status(500).send()
    })
});

// Get a specific user
app.get('/users/:id', (req, res) => {
    const _id = req.params.id;

    User.findById(_id).then((user) => {
        if (!user) {
            return res.status(404).send()
        }
        res.send(user)
    }).catch((error) => {
        res.status(500).send()
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


// Get a list of tasks
app.get('/tasks', (req,res) => {
    Task.find({}).then((tasks) => {
        res.send(tasks)
    }).catch((error) => {
        res.status(500).send()
    })
});

// Get a specific task
app.get('/tasks/:id', (req, res) => {
    const _id = req.params.id;

    Task.findById(_id).then((task) => {
        if (!task) {
            return res.status(404).send()
        }
        res.send(task)
    }).catch((error) => {
        res.status(500).send()
    })
});



app.listen(port, () => {
    console.log('Server is running on port ' + port)
});



// TODO:  Change the default port to 3000

