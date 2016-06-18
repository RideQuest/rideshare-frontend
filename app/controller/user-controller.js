'use strict';

module.exports = function(app){
  app.controller('UserController', ['$http','AuthService','$location','$window', function($http, AuthService, $location, $window) {
    var userRoute = 'http://ec2-54-213-128-146.us-west-2.compute.amazonaws.com/users/';
    var self = this;
    self.users = [];
    self.currentUser = {};

    self.submit = function(){
      if(self.users){
        self.users.push(self.users);
        self.users = '';
      }
    };

    self.getUser = function(){
      var tokenFromLocalStorage = $window.localStorage.token;
      console.log('localToken ' + $window.localStorage.token);
      $http.get(userRoute, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Token ' + tokenFromLocalStorage
        }
      })
        .then((result)=>{
          self.users = result.data;
        }, (error)=>{
          return error;
        });
    };

    self.createUser = function(user){
      console.log('newUser data : ' + JSON.stringify(user));
      $http.post(userRoute + 'signup',JSON.stringify(user))
        .then(function(res){
          self.users.push(res.data);
          console.log('created a user : ' + JSON.stringify(res.data));
          console.log('created a user and stored : ' + JSON.stringify(self.users));
          $location.path('/');
        });
    };

    self.updateUser = function(user){
      $http.put(userRoute + user.id, {
        headers: AuthService.getToken()
      })
      .then((result)=>{
        self.users = self.users.map((u)=>{
          if(u.id === user.id){
            return user;
          }else {
            return u;
          }
        });
      });
    };

    self.removeUser = function(user){
      $http.delete(userRoute + user.id, {
        headers: AuthService.getToken()
      })
      .then((result)=>{
        self.users = self.users.filter((u)=> u.id !=u.id);
      });
    };

    self.logOut = function(){
      AuthService.signOut((err, res)=>{
        if(err) return console.log(err);
        console.log('hitting ' + res);
        $location.path('/');
      });
    };


    self.logIn = function(user){
      console.log(JSON.stringify(user));
      AuthService.signIn(user, (err, res)=>{
        if(err) return console.log(err);
        if($window.localStorage.profile_id === null){
          $location.path('/newprofile');
        } else {
          console.log('Log in res : ' + JSON.stringify(res));
          $location.path('/dashboard');
        }
      });
    };
  }]);

};
