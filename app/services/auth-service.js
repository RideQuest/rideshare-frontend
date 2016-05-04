'use strict';

module.exports = function(app){
  app.factory('AuthService', ['$http', '$window', function($http, $window){
    var token;
    var url = 'http://ec2-54-191-10-228.us-west-2.compute.amazonaws.com';
    var auth = {
      createUser(user, cb){
        console.log('grabbing user data : ' + user);
        cb || function(){};
        $http.post(url + '/users', user)
          .then((res)=>{
            token = $window.localStorage.token = res.data.token;
            cb(null, res);
            console.log('ThisIsToken: ' + token);
          },(err)=>{
            console.log('Error obj : ' + err);
            cb(err);
          });
      },
      getToken(){
        return token || $window.localStorage.token;
      },
      signOut(cb){
        token = null;
        $window.localStorage.token = null;
        if(cb) cb();
      },

      signIn(user, cb){
        console.log('Auth signIn : ' + angular.toJson(user));
        cb || function(){};
        $http.post(url + '/auth-token/',{
          headers: {
            type: 'application/json',
            Authorization: 'Basic ' + btoa(user.username + ':' + user.password)
          }
        }).then((res)=>{
          console.log('here' + res.body);
          token = $window.localStorage.token = res.data.token;
          cb(null, res);
        }, (err)=>{
          console.log(err);
          cb(err);
        });
      }
    };
    return auth;
  }]);
};
