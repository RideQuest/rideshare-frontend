'use strict';
const angular = require('angular');
require('angular-route');


(function(){
  // var gitRoute = 'https://api.github.com/users/lwenke01';

  var app = angular.module("rideshareApp", ['ngRoute']);
require('./directives/app-directives')(app)
