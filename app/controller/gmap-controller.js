module.exports = function(app){
  app.controller('mapController', ['$window', function($window){
    var pikePlace = {lat: 47.608953, lng: -122.341099};
    var bellevueMall = {lat: 47.616591, lng: -122.198797};
    this.user = {};
    this.startingPoint = {
      street: '',
      city: '',
      state: ''
    };
    this.destination  = {
      street: '',
      city: '',
      state: ''
    };;

    this.initialize = function(){
      $window.Gmap.initMap(pikePlace, bellevueMall);
    }

    this.search = function(){
      var start = this.startingPoint.street + ', ' + this.startingPoint.city + this.startingPoint.
      $window.Gmap.convertAddress()
      console.log(angular.toJson(this.startingPoint));
      console.log(angular.toJson(this.destination));
    }
  }]);
}