'use strict';

var express = require('express');
var jade = require('jade');
var utils = require('./../utils').express;

var  angularDomServer = require( './../../../dist/AngularServerRenderer');
var config = require('./../config');

var angularServer = new angularDomServer(config);
angularServer.config.server.setDomain('http://localhost:3005');

var app = utils(express(), 'swig');

app.get('/*', angularServer.middleware, function(req, res) {
    res.render('index-classic');
});

module.exports = app;