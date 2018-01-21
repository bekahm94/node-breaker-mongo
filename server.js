const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const app = express();

// serve files from the public directory
app.use(express.static('public'));

// connect to the db and start the express server
let db;

// ***Url below is to the database on mlab and to mongodb on localhost***
const url = //'mongodb://localhost:27017/clicks';
'mongodb://rebekah94:toshiba5200@ds135946.mlab.com:35946/clicks';
      

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

// add a document to the DB collection recording the click event