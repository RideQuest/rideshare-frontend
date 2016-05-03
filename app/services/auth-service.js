module.exports = function(app){
  app.factory('AuthService', ['$http', '$window', function($http, $window){
    var token;
    var url = 'http://ec2-54-191-10-228.us-west-2.compute.amazonaws.com';
    var auth = {
      createUser(user, cb){
        console.log('grabbing user data : ' + user);
        cb || function(){};
        $http.post(url + 'auth-token/', user)
          .then((res)=>{
            token = $window.localStorage.token = res.data.token;
            console.log('ThisIsToken: ' + token);
          },(err)=>{
            console.log(err);
          });
      },
      getToken(){
        return token || $window.localStorage.token;
      },
      signOut(){
        token = null;
        $window.localStorage.token = null;
      },

      signIn(user, cb){
        cb || function(){};
        $http.get(url + '/auth-token',{
          headers: {
            authorization: 'Basic' + btoa(user.username + ':' + user.password)
          }
        }).then((res)=>{
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
