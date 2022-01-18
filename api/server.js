const express = require('express');

const fruitsRouter = require('./fruits/fruits-router.js');

const server = express();

server.use(express.json());

server.use('/api/fruits', fruitsRouter);


// http get :9000/hello
server.get('/hello', (req, res) => {
    res.status(200).json('hello world!!!!!!')
  })

//http get :9000
server.use('*', (req, res)=>{
    res.status(404).json({
        message: 'not fount'
    })
})

module.exports = server;
