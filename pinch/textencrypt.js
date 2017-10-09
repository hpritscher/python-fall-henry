// var app = angular.module('MyApp', [])
//         app.controller('MyController', function ($scope) {
//             //This will hide the DIV by default.
//             $scope.IsVisible = false;
//             $scope.ShowHide = function () {
//                 //If DIV is visible it will be hidden and vice versa.
//                 $scope.IsVisible = $scope.IsVisible ? false : true;
//             }
//         });



// $( "#button" ).click(function() {
//     $( "#item" ).toggle();
// });

console.log("javascript loaded")
var hide= function() {
    var x = document.getElementsByTagName("encrypted");
    console.log(x[0]);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
