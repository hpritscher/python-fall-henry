"use strict"
var myApp = angular.module('myApp', ['storeProducts','avatar','ngRoute']);

myApp.controller("myController", ['$scope','$http','AvatarFactory',function($scope,$http,AvatarFactory){
  $http.get('data/products.json').then(function(results){

    $scope.Gems = results.data;
    console.log($scope.Gems)

    var ref = firebase.database().ref('/products/f02f50349d8d84fc5a855a19c06aaea2/reviews');

    ref.on("value", function(snapshot) {
      $scope.info= snapshot.val();
      console.log($scope.info);
    }, function(error) {
      console.log("Error: " + error.code);
    });

    $scope.Avatar= AvatarFactory;


    $scope.Register= function(){
      firebase.auth().createUserWithEmailAndPassword($scope.email,$scope.password).catch(function(error){
        var errorCode=error.code;
        var errorMessage = error.message;
      });
    }
    $scope.Login=function(){
      firebase.auth().signInWithEmailAndPassword($scope.email,$scope.password).catch(function(error){
        var errorCode=error.code;
        var errorMessage=error.message;
      });
}

$scope.Logout=function(){
  firebase.auth().signOut();
}

$scope.OnAuthStateChanged= firebase.auth().onAuthStateChanged(function(user){
  if(user){
    $scope.authenticated=true;
  }
  else{
    $scope.authenticated=false;
  }
});
})

}]);

myApp.config(['$routeProvider','$locationProvider',function ($routeProvider,$locationProvider){
  $routeProvider.when("/main",{
    templateUrl:"templates/main.html"
  }) .when("/page1",{
    templateUrl:"templates/page1.html"
  }).when("/page2",{
    templateUrl:"templates/page2.html",
    controller: function() {
      prompt("What is your name?s")
    }
  });
}]);



// myApp.controller("reviewController", function($scope){
//   $scope.newReview = {};
//
//   $scope.addReview = function(i){
//     if(!i.reviews){
//       i.reviews= []
//     }
//
//     i.reviews.push($scope.newReview);
//     console.log($scope.newReview);
//     $scope.newReview={};
//   }
//   };
// });
