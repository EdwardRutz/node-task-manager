'use strict';

// This file contains the code necessary to connect to the database

const mongoose = require('mongoose');

// Connect to Mongoose
mongoose.connect('mongodb+srv://analyst:MikeHotel@dsch-jg49z.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true
});



