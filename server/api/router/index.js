const express = require('express');
const Router = express.Router();








const reg = require('./reg');
const login = require('./login');





const rms = require('./rms');
Router.use(express.json(), express.urlencoded({ extended: false }));

Router.use('/login', login)


Router.use('/reg', reg);


Router.use('/rms', rms);


module.exports = Router;

