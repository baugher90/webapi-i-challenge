// implement your API here
const express = require('express');
const server = express();
server.listen(4000, () => console.log('API running on port 4000'));

server.get('/', (req, res) => {
    res.send('server running')
});

server.post('api/users', (req, res) => {

})

server.get('api/users', (req, res) => {

});

server.get('api/users/:id', (req, res) => {

});

server.delete('api/users/:id', (req, res) => {

});

server.put('api/users/:id', (req, res) => {

});