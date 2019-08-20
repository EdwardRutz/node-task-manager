// CRUD create read update delete

const { MongoClient, ObjectID } = require('task-manager/docs/mongodb');

const connectionURL = 'mongodb+srv://analyst:MikeHotel@dsch-jg49z.mongodb.net/test?retryWrites=true&w=majority';
const databaseName = 'dschDB';

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName);
    
    // db.collection('users').deleteMany({
    //     age: 27
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    db.collection('tasks').deleteOne({
        description: "Clean the house"
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
})