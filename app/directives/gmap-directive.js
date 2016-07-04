module.exports = function(app){
  app.directive('mapRider',function(){
    return {
      restrict: 'E',
      replace: true,
      controller: 'mapController',
      templateUrl: '/components/request-forms/form-rider.html'
    };
  });

  app.directive('mapDriver',function(){
    return {
      restrict: 'E',
      replace: true,
      controller: 'mapController',
      templateUrl: '/components/request-forms/form-driver.html'
    };
  });

  app.directive('mapView',function(){
    return {
      restrict: 'E',
      replace: true,
      controller: 'mapController',
      templateUrl: '/components/map/gmap-view.html'
    };
  });
  
};
