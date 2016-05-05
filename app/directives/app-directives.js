'use strict';
module.exports = function (app) {

  app.directive('userProfile', function(){
    return {
      restrict: 'E',
      templateUrl: './templates/user-profile.html'

    };
  });

  app.directive('newProfile', function(){
    return {
      restrict: 'E',
      templateUrl: './templates/new-profile.html'

    };
  });

  app.directive('home', function(){
    return {
      restrict: 'E',
      templateUrl: './views/01_home.html'

    };
  });

  app.directive('dashboardPage', function(){
    return {
      restrict: 'E',
      templateUrl: './templates/dashboard.html',
      controller: 'ProfileController'

    };
  });

  app.directive('userSignin', function(){
    return {
      restrict: 'E',
      templateUrl: './templates/signin.html'
    };
  });

  app.directive('aboutUs', function(){
    return {
      restrict: 'E',
      templateUrl: './templates/about-us.html'
    };
  });


  app.directive('fileModel', ['$parse', function ($parse) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        var model = $parse(attrs.fileModel);
        var modelSetter = model.assign;

        element.bind('change', function(){
          scope.$apply(function(){
            modelSetter(scope, element[0].files[0]);
          });
        });
      }
    };
  }]);

  app.directive('customNav', function(){
    return {
      restrict: 'E',
      templateUrl: './templates/tabs.html',
      controller: function(){
        this.tab = 1;
        this.isSet = function(check){
          return this.tab === check;
        };
        this.setTab = function(active){
          this.tab = active;
        };
      },
      controllerAs: 'tabCtrl'
    };
  });

  app.directive('mainHeader', function(){
    return {
      restrict: 'E',
      templateUrl: ' ./templates/header.html'

    };
  });

};
