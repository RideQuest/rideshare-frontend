module.exports = function(app){
  app.controller('mapController', ['$window','$http', 'AuthService',function($window, $http, AuthService){
    var mainRoute = 'http://ec2-54-191-10-228.us-west-2.compute.amazonaws.com/';
    // var pikePlace = {lat: 47.608953, lng: -122.341099};
    // var bellevueMall = {lat: 47.616591, lng: -122.198797};
    var tokenFromLocalStorage;
    var newArray;
    this.user = {};
    this.queryRoute = {};
    this.driverRoute = {};
    this.riderRoute = {};
    this.arrayOfCoordinates = [];
    this.origin = '';
    this.startCoordinates = {};
    this.markerPoints = [{"lat":-122.38563537599,"lng":47.588996887206},{"lat":-122.39112854004,"lng":47.5883102417},{"lat":-122.38391876222,"lng":47.588653564453},{"lat":-122.39009857179,"lng":47.589855194093},{"lat":-122.38906860352,"lng":47.590713500977}];


    this.initialize = function(){
      $window.Gmap.initMap();
    };

    this.search = function(cb){
      cb = this.postRoutes;
      console.log('hitting here in search!');
      // $window.Gmap.getDirections(this.origin);
      $window.Gmap.convertAddressForData(this.origin, function(coordinates){
        this.startCoordinates = coordinates;
        console.log('startCoordinates : ' + JSON.stringify(this.startCoordinates));
        cb(JSON.stringify(this.startCoordinates));
      });
    };

    //Search radius
    this.searchAvailWithinRadius = function(data, cb){
      cb = this.sendCoordinates;
      $window.Gmap.convertAddressForData(data, (coordinates)=>{
        $window.Gmap.markerOnStartPoint(coordinates);
        var obj = this.coordsIntoObj(coordinates);
        console.log('Objecttttt : ' + JSON.stringify(obj));
        cb(obj);
      });
    };

    //Changing WKT coordinates into regular coordinates object
    this.coordsIntoObj = function(originalCords){
      var newCordsObj = {lat: '',lng: ''};
      var regex = /\(([^)]+)\)/;
      var cords = regex.exec(originalCords);
      var cordsLat = String(cords).split(',')[2];
      var cordsLng = String(cords).split(',')[3];
      newCordsObj.lat = cordsLat;
      newCordsObj.lng = cordsLng;
      console.log('Catching Lat: ' + cordsLat);
      console.log('Catching Lng: ' + cordsLng);
      // console.log('Catching split: ' + cordsLng);
      return newCordsObj;
    };

    // this.WktIntoArrayJson = function(dataSetArray){
    //
    // };

    //sending newly created coordinates object to BE server using query string on url
    //and getting back array of coordinates data in WKT format, and converting that into
    //regular json that gmap reads.
    this.sendCoordinates = function(data, cb){
      cb = $window.Gmap.markersOnOrigins;
      tokenFromLocalStorage = $window.localStorage.token;
      $http.get(mainRoute + 'query/?lat=' + data.lat + '&lng=' + data.lng, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Token ' + tokenFromLocalStorage
        }
      }).then((res)=>{
        newArray = [];
        res.data.forEach((data)=>{
          var newObj = {};
          var transformedData = data.start_point.split(' ').splice(1);
          var stringifiedCords = String(transformedData).split(',');
          var regex = /\(([^)]+)\)/;
          newObj.lat = JSON.parse(regex.exec(stringifiedCords)[1].split(',')[0]);
          newObj.lng = JSON.parse(regex.exec(stringifiedCords)[1].split(',')[1]);
          newArray.push(newObj);
          console.log('New Array of Obj?? : ' + JSON.stringify(newArray));
        });
        cb(newArray);
      });
    };


    //getting coordinates from /routes/add/
    this.getDriverRoutes = function(){
      var tokenFromLocalStorage = $window.localStorage.token;
      console.log('localStorage?? ' + $window.localStorage.token);
      $http.get(mainRoute + 'routes/add/',{
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Token ' + tokenFromLocalStorage
        }
      })
        .then((res)=>{
          $window.Gmap.markersOnOrigins();
          console.dir('Response back : ' + JSON.stringify(res));
          console.dir('Response back : ' + JSON.stringify(res.data));
          var data = res.data.map((data)=>{
            var obj = {};
            obj.start_point = data.start_point;
            return obj;
          })[0].start_point.split(' ').splice(1);
          var stringifiedCords = String(data).split(',');
          var regex = /\(([^)]+)\)/;
          var cords = regex.exec(stringifiedCords)[1].split(',');
          console.dir('Starting Point? '+ stringifiedCords);
          console.dir('Starting Point? '+ cords);
        });
    };

    this.getQueryRoutes = function() {
      var tokenFromLocalStorage = $window.localStorage.token;
      console.log('localStorage_Query ' + $window.localStorage.token);
      $http.get(mainRoute + 'query/?lat='+'&lng=1', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Token ' + tokenFromLocalStorage
        }
      })
      .then((res)=>{
        console.log(res);
        var data = res.data.map((data)=>{
          var obj = {};
          obj.start_point = data.start_point;
          return obj;
        })[0].start_point.split(' ').splice(1);
        var stringifiedCords = String(data).split(',');
        var regex = /\(([^)]+)\)/;
        var cords = regex.exec(stringifiedCords)[1].split(',');
        console.dir('Starting Point? '+ stringifiedCords);
        console.dir('Starting Point? '+ cords);

      });
    };
    this.getUserRoutes = function(user){
      console.log(user);
      var tokenFromLocalStorage = $window.localStorage.token;
      console.log('localStorage_Query ' + $window.localStorage.token);
      $http.get(mainRoute + '/routes/add/' + this.data.id, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Token ' + tokenFromLocalStorage
        }
      })
        .then((res)=>{
          console.log(res);

        });
    };


    //check if route is with / or without it
    this.postRoutes = function(coordinates){
      console.log('I am inside of postRoute : ' + coordinates);
      $http.post(mainRoute + 'users/', coordinates)
        .then((res)=>{
          console.log('Response back : ' + res);
        });
    };

    this.getAllDriverOrigins = function(){
      $window.Gmap.markersOnOrigins(this.markerPoints);
    };



  }]);
};
