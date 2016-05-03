'use strict';

module.exports = function(app){
app.controller('UserController', ['$http', function($http) {
const userRoute = 'http://ec2-54-191-10-228.us-west-2.compute.amazonaws.com/users/';
const self = this;
self.users = ['user'];
self.submit = function(){
  if(self.users){
    self.users.push(this.users);
    self.users = '';
  }

};
// self.newUser = {};
console.log('hit');
self.ctrl = function($scope) {
    $scope.btns = [{
        label: "One",
        state: false
    }, {
        label: "Two",
        state: true
    }, {
        label: "Three",
        state: false
    }];

    $scope.toggle = function () {
        self.b.state = !self.b.state;
    };
}

self.getUser = function(){
  $http.get(userRoute)
    .then((result)=>{
      self.users = result.data;
    }, function(error){
      return error;
    });
};
self.createUser = function(user){
  $http.post(userRoute, user)
    .then(function(result){
      // console.log('post is hit');
      self.users.push(res.data);
      self.newUser = null;
    });
  };
  self.signIn = function(user){
    $http.put(userRoute + user.id)
    .then((result)=>{
      self.users = self.users.map((u)=>{
        if(u.id === user.id){
          return user;
        }else {
          return u;
        };
      });
    });
  };

self.updateUser = function(user){
  $http.put(userRoute + user.id)
  .then((result)=>{
    self.users = self.users.map((u)=>{
      if(u.id === user.id){
        return user;
      }else {
        return u;
      };
    });
  });
};

self.removeUser = function(user){
  $http.delete(userRoute + user.id)
  .then((result)=>{
    self.users = self.users.filter((u)=> u.id !=u.id);
  });
};

}]);

};
