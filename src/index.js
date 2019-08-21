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

// Get data to create a new user
// Create a user
app.post('/users', (req, res) => {
    const user = new User(req.body);

    user.save().then(() => {
        res.send(user);
    }).catch(() => {

    })
});



app.listen(port, () => {
    console.log('Server is running on port ' + port)
});



// TODO:  Change the default port to 3000

