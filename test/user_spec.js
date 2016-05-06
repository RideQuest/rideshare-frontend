require('../app/index.js');
const angular = require('angular');
require('angular-mocks');

describe('user controller unit test', ()=>{
  var UserController;
  beforeEach(angular.mock.module('rideShareApp'))
  beforeEach(angular.mock.inject(function($controller){
    UserController = $controller('UserController');
  }));
  it('should construct a controller', () => {
    expect(typeof UserController).toBe('object');
    expect(typeof UserController.users[0]).toBe('string');
    expect(typeof UserController.getUser).toBe('function');
  });
  describe('CRUD tests', ()=>{
    var $httpBackend;
    beforeEach(angular.mock.inject(function(_$httpBackend_){
      $httpBackend = _$httpBackend_;
    }));
    afterEach(()=>{
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    })
    // it('get all users', ()=>{
    //   $httpBackend.expectGET('http://ec2-54-191-10-228.us-west-2.compute.amazonaws.com/users/')
    //    .respond(200, {users: [{username: 'testfront', password: 'thisistest'}]});
    //    UserController.getUser();
    //    $httpBackend.flush();
    //    console.log(UserController.users);
    //    expect(UserController.users.length).toBeGreaterThan(0);
    //    expect(UserController.users[0].username).toBe('testfront');
    //    expect(UserController.users[0].password).toBe('thisistest');
    //
    // });
    it('post a new user', ()=>{
      $httpBackend.expectPOST('http://ec2-54-191-10-228.us-west-2.compute.amazonaws.com/users/', {username: 'testfront', password:'thisistest'})
      .respond(200, {username: 'testfront', password: 'thisistest'});
      UserController.createUser({username: 'testfront', password: 'thisistest'});
      $httpBackend.flush();
      console.log(UserController.users);
      expect(UserController.users.length).toBeGreaterThan(0);

    });
  });

});
