'use strict'
var f1= angular.module("f1",[])


f1.controller("f1controller",['$scope','$http',function($scope,$http){
  $http.get('https://ergast.com/api/f1/2017/5/driverStandings.json').then(function(info){
  $scope.information=info.data
  $scope.column='';
})
}])
