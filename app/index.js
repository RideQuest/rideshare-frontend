const angular = require('angular');
const app = angular.module('myApp', []);


app.controller('mapController', ['$window', function($window){
  var pikePlace = {lat: 47.608953, lng: -122.341099};
  var bellevueMall = {lat: 47.616591, lng: -122.198797};
  this.user = {};
  this.from = 'pike place';
  this.to = '';
  console.log('hitting')
  this.initialize = function(){
    $window.Gmap.initMap(pikePlace, bellevueMall);
  }
}]);
