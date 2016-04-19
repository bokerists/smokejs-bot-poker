
'use strict';

const player = require('./player');

const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');

const app = express();
const server = http.Server(app);

app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.status(200).send('200 OK');
});

app.get('/version', function(req, res) {
  res.status(200).send(player.VERSION);
});

app.post('/bet', function(req, res) {
  // player.bet(req.body, bet => res.status(200).send(bet.toString()));
  res.status(200).send(player.bet(req.body).toString());
});


const port = parseInt(process.env['PORT'] || 1337);

server.listen(port, function() {
  console.log('Server listening on port', server.address().port);
});
