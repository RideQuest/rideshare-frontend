'use strict';

const express = require('express');
const bodyParser = require('body-parser').json();
const User = require(__dirname + '/../models/User');

const UserRouter = module.exports = exports = express.Router();
