var storeProducts = angular.module("storeProducts",[])

storeProducts.directive("gemPanels",function(){
  return {
    restrict: 'A',
    templateUrl:'templates/panels.html',
    controller:function($scope){
      var tab=1;

      $scope.tab=tab;
      $scope.selectTab = function(newTab){
        $scope.tab=newTab;
    }
  }
  }
})

storeProducts.directive("storeReviews",function(){
  return{
    restrict:'A',
    templateUrl: 'templates/storeReviews.html',
    controller:
      function($scope){
      $scope.newReview= {};

      $scope.addReview = function(i){

if(!i.reviews){
  i.reviews = []
}
firebase.database().ref('/products/' + CryptoJS.MD5(i.name)+
'/reviews/' + CryptoJS.MD5($scope.newReview.author)).set($scope.newReview)


      }
    }
}
});
