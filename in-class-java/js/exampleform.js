'use strict'
var user = angular.module('user',[]);

user.controller("userController", function ($scope) {
  $scope.newUser= {};

  $scope.addUser= function(newUser){


    if(!newUser){
      newUser= []
    }

    newUser.push($scope.newUser);
    console.log($scope.newUser);

  };

})
