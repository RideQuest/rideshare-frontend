'use strict';
module.exports = function (app) {

  app.directive('userProfile', function(){
    return {
      restrict: 'E',
      templateUrl: './templates/edit-profile-form.html'
    };
  });
  //
  // app.directive('newProfile', function(){
  //   return {
  //     restrict: 'E',
  //     templateUrl: './templates/new-profile.html'
  //
  //   };
  // });
  //
  // app.directive('home', function(){
  //   return {
  //     restrict: 'E',
  //     templateUrl: './views/01_home.html'
  //
  //   };
  // });
  //
  // app.directive('dashboardPage', function(){
  //   return {
  //     restrict: 'E',
  //     templateUrl: './templates/dashboard.html',
  //     controller: 'ProfileController'
  //
  //   };
  // });
  //
  app.directive('userSignin', function(){
    return {
      restrict: 'E',
      templateUrl: './templates/signin.html'
    };
  });

  app.directive('logoBar', function(){
    return {
      restrict: 'E',
      templateUrl: './templates/logo-bar.html'
    };
  });
  //
  //
  // app.directive('fileModel', ['$parse', function ($parse) {
  //   return {
  //     restrict: 'A',
  //     link: function(scope, element, attrs) {
  //       var model = $parse(attrs.fileModel);
  //       var modelSetter = model.assign;
  //
  //       element.bind('change', function(){
  //         scope.$apply(function(){
  //           modelSetter(scope, element[0].files[0]);
  //         });
  //       });
  //     }
  //   };
  // }]);
  //
  app.directive('customNav', function(){
    return {
      restrict: 'E',
      templateUrl: './templates/tabs.html'
    };
  });

  app.directive('mainHeader', function(){
    return {
      restrict: 'E',
      templateUrl: ' ./templates/header.html'
    };
  });

};
