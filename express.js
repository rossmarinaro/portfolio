////express 

const express = require('express'),
      app = express(),
      server = require('http').Server(app), 
      port = process.env.PORT || 421;

module.exports = { express, app, server, port} 