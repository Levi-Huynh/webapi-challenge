const express = require('express');
const cors = require('cors');
const actionRouter = require('./data/helpers/actionRouter.js');
const projectRouter = require('./data/helpers/projectRouter.js');


const server = express();
const path = require('path');
server.use(express.json());
server.use(cors());
server.use(express.static(path.join(__dirname, 'reactclient/build')));


server.use('/api/action', actionRouter);

server.use('/api/project', projectRouter);

server.get('/', (req, res) => {
    res.send(`<h2>Let's write some middleware!</h2>`)
  });
  
  server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/reactclient/build/index.html'));
  });

  module.exports= server;