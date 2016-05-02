'use strict';
module.exports = function (app) {

app.directive('userProfile', function(){
    return {
      restrict: 'E',
      templateUrl: './templates/user-profile.html',
      controller:function($http){
        this.userInfo = contact;
      },
      controllerAs: 'contactCtrl'
    };
  });

  app.directive('newProfile', function(){
    return {
      restrict: 'E',
      templateUrl: './templates/portfolio-contact.html',
      controller:function($http){
        this.userInfo = contact;
      },
      controllerAs: 'contactCtrl'
    };
  });
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
  app.directive('signIn', function(){
    return {
      restrict: 'E',
      templateUrl: './templates/portfolio-projects.html',
      controller:function($http){
        $http.get(gitRoute + '/' + 'repos')
        .then((result)=>{
          this.repos = result.data;
        });
      },
      controllerAs: 'projectCtrl'
    };
  });
  app.directive('customHome', function(){
    return {
      restrict: 'E',
      templateUrl: './templates/portfolio-home.html',
      controller:function($http){
        $http.get(gitRoute)
        .then((result)=>{
          this.user = result.data;
        });
      },
      controllerAs:'homeCtrl'
    };
  });
  app.directive('customResume', function(){
    return {
      retrict: 'E',
      templateUrl: './templates/portfolio-resume.html',
      controller:function($http){
        $http.get('./app/data-json/educationData.json')
        .then((result)=>{
          this.schools = result.data;
        });
      },
      controllerAs: 'resumeCtrl'
    };
  });
  app.directive('customResources', function(){
    return {
      restrict: 'E',
      templateUrl: './templates/portfolio-resources.html'
    };
  });
  app.directive('directiveLink', function(){
    return {
      restrict: 'A',
      replace: true,
      link: function($scope, element) {
        element.css('border-radius', '25px');
        element.css('text-align', 'center');
        element.css('color', 'blue');
        element.css('font-size', '3em');
        element.css('transform', 'translateX(10px) rotate(10deg) translateY(5px)');

       }
     };
   });
};
