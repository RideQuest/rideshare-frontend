require('../app/index.js');
const angular = require('angular');
require('angular-mocks');

describe('should test something', ()=> {
  var profileController;
  it('should test', ()=>{
    expect(false).toBe(false);
  });
  beforeEach(angular.mock.module('rideShareApp'))
  beforeEach(angular.mock.inject(function($controller){
    profileController = $controller('ProfileController');
  }))
  it('should contruct the controller', ()=>{
    expect(typeof profileController).toBe('object');
    expect(profileController.profiles[0]).toBe('profile');
    expect(typeof profileController.getProfile).toBe('function');
    expect(typeof profileController.updateProfile).toBe('function');
    expect(typeof profileController.dashboardView).toBe('function');
  });


});
