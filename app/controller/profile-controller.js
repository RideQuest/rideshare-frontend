'use strict';

module.exports = function(app){

  app.controller('ProfileController', ['$http', '$window','$location', function($http, $window, $location) {
    var profileRoute = 'http://ec2-54-213-128-146.us-west-2.compute.amazonaws.com/profiles/';
    this.profiles = {};
    this.copiedProfile = {};
    this.editingProfile = false;
    this.newProfile = {};
    this.editedProfile = {};
    this.updateStatus = {};
    
    var idStored = $window.localStorage.profile_id;
    var tokenFromLocalStorage = $window.localStorage.token;

    //getting profile data
    this.getProfile = function(){
      $http.get(profileRoute + idStored + '/',{
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Token ' + tokenFromLocalStorage
        }
      })
      .then((result)=>{
        this.profiles = result.data; //saving profile data in this.profile for later use
        this.copiedProfile = angular.copy(result.data);
        console.log('this.profiles', this.profiles);
      }, function(error){
        console.error(error);
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
      this.newProfile = profile;
      // console.log('token : ' + tokenFromLocalStorage);
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

    this.updateProfile = function(){
      console.log('this.editedProfile', this.profiles);
      console.log('token in put', tokenFromLocalStorage);
      $http.put(profileRoute + idStored + '/', this.profiles, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Token ' + tokenFromLocalStorage
        }
      })
        .then((result)=>{
          console.log('update profile result', result);
          this.updateStatus = {
            message: 'Your data has been updated!'
          }
          this.profiles = result.data;

        });
    };

    //edit button toggle
    this.editFieldShow = function(){
      if(!this.editingProfile)
        return this.editingProfile = true;

      if(this.editingProfile)
        return this.editingProfile = false;
      console.log('edit button true?', this.editingProfile);
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
