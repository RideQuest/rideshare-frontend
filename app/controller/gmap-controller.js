module.exports = function(app){
  app.controller('mapController', ['$window','$http', function($window, $http){
    var mainRoute = 'http://ec2-54-191-10-228.us-west-2.compute.amazonaws.com/'
    var pikePlace = {lat: 47.608953, lng: -122.341099};
    var bellevueMall = {lat: 47.616591, lng: -122.198797};
    this.user = {};
    this.origin = '';
    this.destination  = '';

    this.initialize = function(){
      $window.Gmap.initMap();
    }

    this.search = function(){
      console.log('hitting here in search!')
      $window.Gmap.getDirections(this.origin)
    }

    
  }]);
}
