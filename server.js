console.log('Server-side code running');

const express = require('express');
const MongoClient = require('mongodb').MongoClient;
//const mongojs = require('mongojs');

const app = express();

// serve files from the public directory
app.use(express.static('public'));

// connect to the db and start the express server
let db; //'mongodb://localhost:27017/score'

// ***Url below is to the database on mlab and to mongodb on localhost***
const url = 'mongodb://localhost:27017/score';
//'mongodb://rebekah94:toshiba5200@ds213118.mlab.com:13118/score';
      

MongoClient.connect(url, (err, database) => {
    if(err) {
        return console.log(err);
    }
    db = database;
// start the express web server listening on 8080
app.listen(8080, () => {
  console.log('listening on 8080');
    });
});
  
// serve the homepage
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// serve the homepage
app.get('/hello', (req, res) => {
  res.send('/index.html');
});

// add a document to the DB collection recording the score
app.post('/scores', (req, res) => {
    const score = {gameScore: new Date()};
    console.log(score);
    console.log(db);
    
    db.collection('scores').save(score, (err, result) => {
        if (err) {
            return console.log(err);
        }
        console.log('score added to db');
        res.redirect('/');
    });
});

// get the score data from the database
app.get('/scores', (req, res) => {
    
    db.collection('scores').find().toArray((err, result) => {
        if (err) return console.log(err);
        res.send(result);
    });
});