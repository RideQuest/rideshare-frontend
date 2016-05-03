'use strict';

module.exports = function(app){
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

};
this.createUser = function(user){
  $http.post(userRoute, user)
    .then((result)=>{
      console.log('post is hit');
      this.newUser.push(result.data);
    });
  };

this.updateUser = function(user){
  $http.put(userRoute + user.id)
  .then((result)=>{
    this.users = this.users.map((u)=>{
      if(u.id === user.id){
        return user;
      }else {
        return u;
      };
    });
  });
};

this.removeUser = function(user){
  $http.delete(userRoute + user.id)
  .then((result)=>{
    this.users = this.users.filter((u)=> u.id !=u.id);
  });
};


}]);


};
