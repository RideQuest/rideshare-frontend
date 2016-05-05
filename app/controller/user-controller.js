'use strict';

module.exports = function(app){
  app.controller('UserController', ['$http','AuthService', '$location', function($http, AuthService, $location) {
    const userRoute = 'http://ec2-54-191-10-228.us-west-2.compute.amazonaws.com/users/';
    const self = this;
    self.users = ['user'];
    self.submit = function(){
      if(self.users){
        self.users.push(self.users);
        self.users = '';
      }
    };

    self.getUser = function(){
      $http.get(userRoute)
        .then((result)=>{
          self.users = result.data;
        }, (error)=>{
          return error;
        });
    };

    self.createUser = function(user){
      $http.post(userRoute, user)
        .then(function(res){
          console.log('post is hit');
          self.users.push(res.data);
          self.newUser = null;
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

//auth routes

    // self.signUp = function(user){
    //   AuthService.createUser(user, (err, res)=>{
    //     if(err) return console.log(err);
    //     console.log('hitting' + res);
    //   });
    // };

    self.logOut = function(user){
      AuthService.signOut((err, res)=>{
        if(err) return console.log(err);
        console.log('hitting' + res);
        $location.path('/signin')
      });
    };


    self.logIn = function(user){
      // console.dir(angular.toJson(user));
      AuthService.signIn(user, (err, res)=>{
        if(err) return console.log(err);
        console.log('Log in res.body : ' + angular.toJson(res.body));
        console.log('Log in res : ' + angular.toJson(res));
        $location.path('/dashboard');
      });
    };
  }]);

};
