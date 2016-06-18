'use strict';

module.exports = function(app){
  app.factory('AuthService', ['$http', '$window', function($http, $window){
    var token;
    var userId;
    var profileId;
    var url = 'http://ec2-54-213-128-146.us-west-2.compute.amazonaws.com';
    var auth = {
      getToken(){
        return token || $window.localStorage.token;
      },
      signOut(cb){
        token = null;
        userId = null;
        profileId = null;
        $window.localStorage.token = null;
        $window.localStorage.profile_id = null;
        $window.localStorage.user_id = null;
        if(cb) cb();
      },

      signIn(user, cb){
        cb || function(){};
        $http.post(url + '/auth-token/',{},{
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + btoa(user.username + ':' + user.password)
          }
        }).then((res)=>{
          token = $window.localStorage.token = res.data.token;
          profileId = $window.localStorage.profile_id = res.data.profile_id;
          userId = $window.localStorage.user_id = res.data.user_id;
          console.log('raw : ' + JSON.stringify(res.data.profile_id));
          console.log('raw : ' + JSON.stringify(res.data.user_id));
          cb(null, res);
        }, (err)=>{
          cb(err);
        });
      },


    };
    return auth;
  }]);
};
