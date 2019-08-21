'use strict';

// This file contains the code necessary to connect to the database

const mongoose = require('mongoose');

// Connect to Mongoose
mongoose.connect('mongodb+srv://analyst:MikeHotel@dsch-jg49z.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true
});


// --- Task data ---
// Create a Task model
const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
});
