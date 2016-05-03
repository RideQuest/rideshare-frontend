module.exports = function(app){
  app.factory('AuthService', ['$http', '$window', function($http, $window){
    var token;
    var url = 'http://ec2-54-191-10-228.us-west-2.compute.amazonaws.com/';
    var auth = {
      createUser(user, cb){
        console.log(user);
        cb || function(){};
        $http.post(url + 'auth_token/', user)
          .then((res)=>{
            token = $window.localStorage.token = res.data.token;

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
      singIn(user){
        cb || function(){};
        $http.get(url + '/login',{
          headers: {
            authorization: 'Basic' + btoa(user.username + ':' + user.password)
          }
        }).then((res)=>{
          
        });
      }

    };
  }]);
};
