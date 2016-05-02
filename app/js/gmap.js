(function(module){
  var Gmap = {};

  Gmap.initMap = function (){
    var pikePlace = {lat: 47.608953, lng: -122.341099};
    var bellevueMall = {lat: 47.616591, lng: -122.198797};

    var map = new google.maps.Map(document.getElementById('map'),{
      center: pikePlace,
      scrollwheel: false,
      zoom: 7
  });

    var directionsDisplay = new google.map.DirectionsRenderer({
      map: map
    });

    var request = {
      destination: bellevueMall,
      origin: pikePlace,
      travelMode: google.maps.TravelMode.DRIVING
    };

    var directionsService = new google.maps.DirectionsService();
    directionsService.route(request, function(res, status){
      if(status == google.maps.DirectionsStatus.OK){
        directionsDisplay.setDirections(res);
      }
    });
    return map;
    }


    module.exports = Gmap;

})(window);
