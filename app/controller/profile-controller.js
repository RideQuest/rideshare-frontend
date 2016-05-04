'use strict';

module.exports = function(app){

app.controller('ProfileController', ['$http', '$scope', '$location', function($http, $scope, $location) {
const profileRoute = 'http://ec2-54-191-10-228.us-west-2.compute.amazonaws.com/profiles/1/';
// const self= this;
$scope.profiles = ['profile'];
$scope.newProfile = {};
console.log('hit profile');


$scope.getProfile = function(){
  $http.get(profileRoute)
    .then((result)=>{
      console.log();
      $scope.profiles = result.data;
    }, function(error){
      console.log(error);
    });

};
// this.createProfile = function(profile){
//   $http.post(profileRoute, user)
//     .then((result)=>{
//       console.log('post is hit');
//       this.profiles.push(result.data);
//     });
//   };

$scope.updateProfile = function(profile){
  $http.put(profileRoute + profile.id)
  .then((result)=>{
    $scope.profiles = $scope.profiles.map((p)=>{
      if(p.id === profile.id){
        return profile;
      }else {
        return p;
      };
    });
  });
};

$scope.submit = function(profile){
  if($scope.profiles){
    $scope.profiles.push(this.profiles);
    $scope.profiles = '';
  }

};
// this.onFileSelect = function($files) {
//   for(var i=0; < $files.length; i++){
//     var $file = $files[i];
//     Upload.upload({
//       url:
//     })
//   }
// }

// this.removeUser = function(user){
//   $http.delete(userRoute + user.id)
//   .then((result)=>{
//     this.users = this.users.filter((u)=> u.id !=u.id);
//   });
// };


}]);
app.controller('FileController', ['$scope', 'fileUpload', function($scope, fileUpload){

    $scope.uploadFile = function(){
        var file = $scope.myFile;
        console.log('file is ' );
        console.dir(file);
        var uploadUrl = "/fileUpload";
        fileUpload.uploadFileToUrl(file, uploadUrl);
    };

}]);
};
