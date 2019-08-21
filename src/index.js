const express = require('express');
require('./db/mongoose.js');
const User = require('./models/user');

const app = express();
const port = process.env.PORT || 3001;

// Parse incoming data into an object
app.use(express.json());

// Get data to create a new user
// Create a user
app.post('/users', (req, res) => {
    console.log(req.body);
    res.send('testing!');
});



app.listen(port, () => {
    console.log('Server is running on port ' + port)
});



