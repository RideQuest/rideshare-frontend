'use strict';

module.exports = function(app){

  app.controller('ProfileController', ['$http', '$window','$location', function($http, $window, $location) {
    var profileRoute = 'http://ec2-54-213-128-146.us-west-2.compute.amazonaws.com/profiles/';
    this.profiles = ['profile'];
    this.editingProfile = false;
    this.newProfile = {};


    this.getProfile = function(){
      var tokenFromLocalStorage = $window.localStorage.token;
      var idStored = $window.localStorage.profile_id;
      $http.get(profileRoute + idStored + '/',{
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Token ' + tokenFromLocalStorage
        }
      })
      .then((result)=>{
        console.log('hit ' + result.status);
        this.profiles = result.data;
      }, function(error){
        console.log(error);
        $location.path('/newprofile');
      });

    };

    this.goToGmapView = function(){
      console.log('searching!!!');
      $location.path('/search');
    };

    this.goToAboutMe = function(){
      $location.path('/about');
    };

    this.createProfile = function(profile){
      var tokenFromLocalStorage = $window.localStorage.token;
      this.newProfile = profile;
      console.log('token : ' + tokenFromLocalStorage);
      console.log('Profile : ' + JSON.stringify(this.newProfile));
      $http.post(profileRoute + 'add', JSON.stringify(profile), {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Token ' + tokenFromLocalStorage
        }
      })
        .then((result)=>{
          console.log('post result is hit ' + JSON.stringify(result));
          $window.localStorage.profile_id = result.data.id;
          $window.localStorage.user_id = result.data.user;
          this.profiles.push(result.data);
          $location.path('/dashboard');
        });
    };
    //***********************
    //getting dashboard data
    //***********************
    this.dashboardView = function(){
      $http.get(profileRoute, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Basic ' + $window.localStorage.token
        }
      }).then((res)=>{
        console.log('Profile Result : ' + JSON.stringify(res));
        $location.path('/dashboard');
      });
    };

    this.updateProfile = function(profile){
      $http.put(profileRoute + profile.id)
        .then((result)=>{
          this.profiles = this.profiles.map((p)=>{
            if(p.id === profile.id){
              return profile;
            } else {
              return p;
            }
          });
        });
    };

    this.editButtonShow = function(){
      this.editingProfile = true;
    };

    this.submit = function(profile){
      if(this.profiles){
        this.profiles.push(this.profiles);
        this.profiles = '';
      }

    };

  }]);

  app.controller('FileController', [ 'fileUpload', function( fileUpload){

    this.uploadFile = function(){
      var file = this.myFile;
      console.log('file is ' );
      console.dir(file);
      var uploadUrl = '/fileUpload';
      fileUpload.uploadFileToUrl(file, uploadUrl);
    };


  }]);

};
