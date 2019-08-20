const mongoose = require('mongoose');

// Connect to Mongoose
mongoose.connect('mongodb+srv://analyst:MikeHotel@dsch-jg49z.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true
});

// --- User data ---
// Create a model
const User = mongoose.model('User', {
    name: {
        type: String
    },
    age: {
        type: Number
    }
});

// Create a new user instance from the model and pass in data for the user
const me = new User({
    name: 'Andrew',
    age: '22'
});

// Save new user instance to the database
me.save().then(() => {
    console.log(me)
}).catch((error) => {
    console.log('Error!', error)
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

// Create a new task instance
const task = new Task({
    description: '  Eat lunch'
});

// Save the new task instance
task.save().then(() => {
    console.log(task)
}).catch((error) => {
    console.log(error)
});


