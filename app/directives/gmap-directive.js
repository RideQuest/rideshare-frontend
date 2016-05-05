module.exports = function(app){
  app.directive('mapRider',function(){
    return {
      restrict: 'E',
      replace: true,
      controller: 'mapController',
      templateUrl: '/templates/form-rider.html'
    };
  });

  app.directive('mapDriver',function(){
    return {
      restrict: 'E',
      replace: true,
      controller: 'mapController',
      templateUrl: '/templates/form-driver.html'
    };
  });

  app.directive('mapView',function(){
    return {
      restrict: 'E',
      replace: true,
      controller: 'mapController',
      templateUrl: '/templates/gmap-view.html'
    };
  });
  // app.directive('mapRider',function(){
  //   return {
  //     restrict: 'E',
  //     replace: true,
  //     controller: 'mapController',
  //     templateUrl: '/templates/gmap-view.html'
  //   };
  // });
};
