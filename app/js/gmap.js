(function(module){
  var Gmap = {};
  var map;

  Gmap.initMap = function (startPoint, destination){
    console.log('Here is two points ' + JSON.stringify(startPoint) + ' '+ JSON.stringify(destination))
    var pikePlace = {lat: 47.608953, lng: -122.341099};
    map = new google.maps.Map(document.getElementById('map'),{
      center: pikePlace,
      scrollwheel: false,
      zoom: 11
  });

    var directionsDisplay = new google.maps.DirectionsRenderer({
      map: map
    });

    var request = {
      destination: destination,
      origin: startPoint,
      travelMode: google.maps.TravelMode.DRIVING
    };

    var directionsService = new google.maps.DirectionsService();
    directionsService.route(request, function(res, status){
      if(status == google.maps.DirectionsStatus.OK){
        directionsDisplay.setDirections(res);
      }
    });
  }

  Gmap.convertAddress = function(fromAddress){
    geocoder.geocode({address: fromAddress})
  }

  module.Gmap = Gmap;

})(window);
