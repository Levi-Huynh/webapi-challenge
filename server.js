const express = require('express');

const actionRouter = require('./data/helpers/actionRouter.js');
const projectRouter = require('./data/helpers/projectRouter.js');


const server = express();
server.use(express.json());

server.use(express.json());


server.use('/api/action', actionRouter);

server.use('/api/project', projectRouter);

server.get('/', (req, res) => {
    res.send(`<h2>Let's write some middleware!</h2>`)
  });
  

  module.exports= server;