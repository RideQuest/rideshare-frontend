'use strict';

module.exports = function (app) {
  app.config(['$routeProvider', function(routeProvider){
    routeProvider

    //home
    .when('/signin', {
      controller: 'UserController',
      templateUrl: './views/signin.html'
    })
    .when('/signup', {
      controller: 'UserController',
      templateUrl: './views/signup.html'
    })

    .when('/dashboard', {
      controller: 'UserController',
      templateUrl: './templates/dashboard.html'
    })
    .when('/', {
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
