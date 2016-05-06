require('../app/index.js');
const angular = require('angular');
require('angular-mocks');

describe('should test something', ()=> {
  var mapController;
  it('should test', ()=>{
    expect(false).toBe(false);
  });
  beforeEach(angular.mock.module('rideShareApp'))
  beforeEach(angular.mock.inject(function($controller){
    mapController = $controller('mapController');
  }))
  it('should contruct the controller', ()=>{
    expect(typeof mapController).toBe('object');
    expect(typeof mapController.sendCoordinates).toBe('function');
    expect(typeof mapController.coordsIntoObj).toBe('function');
    expect(typeof mapController.getDriverRoutes).toBe('function');
  });


});
