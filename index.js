// implement your API here
const express = require('express');
const server = express();
server.listen(4000, () => console.log('API running on port 4000'));
const db = require('./data/db.js');

server.get('/', (req, res) => {
    res.send('server running')
});

server.post('api/users', (req, res) => {
    const userInfo = req.body;
    db.insert
      .add(userInfo)
      .then(users => {
          if(find) {
            res.status(201).json({success: true, users});
          } else {
            res.status(400).json({success: true, errorMessage: "Please provide name and bio for the user."});
          }
      })
      .catch(err => {
          res.status(err.code).json({success: false,  error: "There was an error while saving the user to the database"})
      })
})

server.get('api/users', (req, res) => {

});

server.get('api/users/:id', (req, res) => {

});

server.delete('api/users/:id', (req, res) => {

});

server.put('api/users/:id', (req, res) => {

});