module.exports = function(app){
  app.controller('mapController', ['$window','$http', 'AuthService',function($window, $http, AuthService){
    var mainRoute = 'http://ec2-54-191-10-228.us-west-2.compute.amazonaws.com/';
    var pikePlace = {lat: 47.608953, lng: -122.341099};
    var bellevueMall = {lat: 47.616591, lng: -122.198797};
    this.user = {};
    this.origin = '';
    this.startCoordinates = {};
    this.markerPoints = [{lat: 47.615635, lng: -122.203703},{lat: 47.565444, lng: -122.329953}];

    this.initialize = function(){
      $window.Gmap.initMap();
    };

    this.search = function(cb){
      cb = this.postRoutes;
      console.log('hitting here in search!');
      $window.Gmap.getDirections(this.origin);
      $window.Gmap.convertAddressForData(this.origin, function(coordinates){
        this.startCoordinates = coordinates;
        console.log('startCoordinates : ' + JSON.stringify(this.startCoordinates));
        cb(JSON.stringify(this.startCoordinates));
      });
    };

    //check if route is with / or without it
    this.postRoutes = function(coordinates){
      console.log('I am inside of postRoute : ' + coordinates);
      $http.post(mainRoute + 'users/', coordinates)
        .then((err, res)=>{
          if(err) return console.log('Errorrrr : ' + err);
          console.log('Response back : ' + res);
        });
    };

    this.getAllDriverOrigins = function(){
      $window.Gmap.markersOnOrigins(this.markerPoints);
    };



  }]);
};
