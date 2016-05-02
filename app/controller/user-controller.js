'use strict';

module.exports = function(app)=>{
app.controller('UserController', ['$http', function($http) {
const userRoute = 'http://ec2-54-191-10-228.us-west-2.compute.amazonaws.com/users/';
this.users = ['user'];
this.newUser = {};
console.log('hit');

this.getUser = function(){
  $http.get(userRoute)
    .then((result)=>{
      this.users = result.data;
    }, function(error){
      console.log(error);
    });
  // };
};
this.createUser = function(user){
  $http.post(userRoute)
    .then((result)=>{
      this.newUser.push(user);
    });
  };

this.updateUser = function(user){
  $http.put(userRoute + user._id)
  

}

}]);


// app.directive('customUser', function($http){
//   return {
//     restrict: 'E',
//     templateUrl: './templates/user-profile.html',
//     controller: function($http){
//       $http.get(userRoute)
//       .then((result)=>{
//         self.user = result.data;
//       })
//
//     }
//   }
//
// }]);
};
