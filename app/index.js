'use strict';

var angular = require('angular');
require('angular-route');

var app = angular.module('rideShareApp', ['ngRoute']);

//controller


require(__dirname + '/controller/user-controller.js')(app);
require(__dirname + '/controller/profile-controller.js')(app);
require(__dirname + '/controller/gmap-controller.js')(app);

require(__dirname + '/services/auth-service.js')(app);
require(__dirname + '/services/file-service.js')(app);

require(__dirname + '/directives/gmap-directive.js')(app);
require(__dirname + '/directives/app-directives.js')(app);

//angular router

app.config(['$routeProvider', function(routeProvider){
  routeProvider

  //home
  .when('/', {
    controller: 'UserController',
    templateUrl: './views/01_signup_in.html'
  })
  // .when('/signout', {
  //   controller: 'UserController',
  //   templateUrl: './views/01_signup_in.html'
  // })
  .when('/dashboard', {
    controller: 'UserController',
    templateUrl: './templates/dashboard.html'
  })
  .when('/home', {
    controller: 'UserController',
    templateUrl: './views/home.html'
  })
  .when('/about', {
    controller: 'ProfileController',
    templateUrl: './templates/about-us.html'
  })
  .when('/profile', {
    controller: 'ProfileController',
    templateUrl: './templates/user-profile.html'
  })
  .when('/search', {
    controller: 'ProfileController',
    templateUrl: './templates/gmap-view.html'
  })
  .when('/newprofile', {
    controller: 'ProfileController',
    templateUrl: './templates/new-profile.html'
  });
}]);
