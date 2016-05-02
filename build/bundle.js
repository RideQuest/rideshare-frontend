/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(2);
	module.exports = __webpack_require__(3);


/***/ },
/* 1 */
/***/ function(module, exports) {

	

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	(function(){
	  // var gitRoute = 'https://api.github.com/users/lwenke01';

	  var app = angular.module("rideshareApp", []);

	  app.directive('userProfile', function(){
	    return {
	      restrict: 'E',
	      templateUrl: './templates/portfolio-contact.html',
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
	      templateUrl: './templates/portfolio-tabs.html',
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
	  app.directive('customProject', function(){
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
	})();


/***/ },
/* 3 */
/***/ function(module, exports) {

	

/***/ }
/******/ ]);