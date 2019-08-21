'use strict';

// This file contains the model for a task

const mongoose = require('mongoose');

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

module.exports = Task;
