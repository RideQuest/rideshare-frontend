'use strict';

module.exports = function(app){

  app.controller('ProfileController', ['$http', '$window','$location', function($http, $window, $location) {
    const profileRoute = 'http://ec2-54-191-10-228.us-west-2.compute.amazonaws.com/profiles/3/';
    // const self= this;
    this.profiles = ['profile'];
    this.editingProfile = false;
    this.newProfile = {};
    console.log('hit profile');

    this.getProfile = function(){
      var tokenFromLocalStorage = $window.localStorage.token;
      console.log('localStorage?? ' + $window.localStorage.token);
      $http.get(profileRoute + '3/' ,{
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Token ' + tokenFromLocalStorage
        }
      })
      .then((result)=>{
        console.log('Get Profile ' + result);
        this.profiles = result.data;
      }, function(error){
        console.log(error);
      });

    };

    this.goToGmapView = function(){
      console.log('searching!!!');
      $location.path('/search');
    };
    // this.getProfile = function(){
    //   $http.get(profileRoute)
    // this.createProfile = function(profile){
    //   $http.post(profileRoute, user)
    //     .then((result)=>{
    //       console.log('post is hit');
    //       this.profiles.push(result.data);
    //     });
    //   };
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
