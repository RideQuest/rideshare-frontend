'use strict';

var angular = require('angular');
require('angular-route');

var app = angular.module('rideShareApp', ['ngRoute']);

//controller
require(__dirname + '/controller/gmap-controller.js')(app);

require(__dirname + '/services/auth-service.js')(app);
require(__dirname + '/services/file-service.js')(app);
require(__dirname + '/directives/gmap-directive.js')(app);
require(__dirname + '/directives/app-directives.js')(app);

require(__dirname + '/controller/user-controller.js')(app);
require(__dirname + '/controller/profile-controller.js')(app);



//angular router

app.config(['$routeProvider', function(routeProvider){
  routeProvider
  .when('/signin', {
    controller: 'UserController',
    templateUrl: './templates/signin.html'

  })
  .when('/home', {
    controller: 'UserController',
    templateUrl: './views/home.html'
  })
  .when('/', {
    controller: 'UserController',
    templateUrl: './views/home.html'
  })
  .when('/signup', {
    controller: 'UserController',
    template: './templates/dashboard.html'
  })
  .when('/profile', {
    controller: 'ProfileController',
    templateUrl: './views/home.html'
  });
}]);
