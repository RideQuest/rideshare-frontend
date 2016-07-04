'use strict';

module.exports = function (app) {
  app.config(['$routeProvider', function(routeProvider){
    routeProvider

    //home
    .when('/', {
      controller: 'UserController',
      templateUrl: './views/01_signup_in.html'
    })

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
};
