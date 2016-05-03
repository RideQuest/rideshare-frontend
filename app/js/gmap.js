(function(module){
  var Gmap = {};
  var map;
  var geocoder;
  var request;

  Gmap.initMap = function (){
    var pikePlace = {lat: 47.608953, lng: -122.341099};
    geocoder = new google.maps.Geocoder();
    map = new google.maps.Map(document.getElementById('map'),{
      center: pikePlace,
      scrollwheel: false,
      zoom: 12
    });
  }

  Gmap.getDirections = function(startPoint){
    Gmap.convertAddress(startPoint, function(){
      console.log('Is it start point ? ' + startPoint)
      request = {
        destination: {lat: 47.618427, lng: -122.351843},
        origin: startPoint,
        travelMode: google.maps.TravelMode.DRIVING
      }
      var directionsDisplay = new google.maps.DirectionsRenderer({
          map: map
        });

      var directionsService = new google.maps.DirectionsService();
        directionsService.route(request, function(res, status){
          if(status == google.maps.DirectionsStatus.OK){
            directionsDisplay.setDirections(res);
          }
      });

    });
  }

  Gmap.convertAddressForData = function(address, cb){
    geocoder.geocode({'address': address}, function(results, status){
      if(status == google.maps.GeocoderStatus.OK){
        map.setCenter(results[0].geometry.location);
        console.log('inside convert fn : ' + JSON.stringify(results[0].geometry.location));
        var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location,
          clickable: true
        });
        var coordinates = results[0].geometry.location;
        cb(coordinates)
      } else {
        alert('Geocode was not successful : ' + status);
      };
    });
  };

  Gmap.convertAddress = function(address, cb){
    geocoder.geocode({'address': address}, function(results, status){
      if(status == google.maps.GeocoderStatus.OK){
        map.setCenter(results[0].geometry.location);
        console.log('inside convert fn : ' + JSON.stringify(results[0].geometry.location));
        var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location,
          clickable: true
        });
        startPoint = results[0].geometry.location
        cb(startPoint)
      } else {
        alert('Geocode was not successful : ' + status);
      };
    });
  };

  Gmap.markersOnOrigins = function(markerPoints){
    var marker;
    markerPoints.forEach((startingPoint)=>{
        marker = new google.maps.Marker({
        position: startingPoint,
        map: map,
        title: 'marker??'
      });
    });

  }
  module.Gmap = Gmap;

})(window);
