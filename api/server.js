const express = require('express');

const fruitsRouter = require('./fruits/fruits-router.js');

const server = express();

server.use(express.json());
// http get :9000/hello
server.get('/hello', (req, res) => {
    res.status(200).json('hello world!!!!!!')
  })
  
server.use('/api/fruits', fruitsRouter);

server.use('*', (req, res)=>{
    res.status(404).json({
        message: 'not fount'
    })
})

module.exports = server;
