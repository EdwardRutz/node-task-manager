const express = require('express');

const app = express();
const port = process.env.PORT || 3001;

app.post('/users', async (req, res) => {
    // const user = new User(req.body);
    res.send('testing!');
    try {
        await user.save();
        res.status(201).send(user)
    } catch (e) {
        res.status(400).send(e)
    }
});






app.listen(port, () => {
    console.log('Server is running on port ' + port)
});



