'use strict';

var home = angular.module('myApp.home', ['ui.bootstrap', 'ngRoute'])

var carousel = angular.module('myApp.home.carousel', []);
carousel.controller('CarouselCtrl', CarouselCtrl);

function CarouselCtrl($scope, $http){
    $http.get('app/data/items_top.json')
        .then(function(response_top) {
            $scope.items_top = response_top.data;
        }, function(response) {
            $scope.items_top = "Somethig went wrong";
        });
    $http.get('app/data/items_bottom.json')
        .then(function(response_bottom) {
            $scope.items_bottom = response_bottom.data;
        }, function(response) {
            $scope.items_bottom = "Somethig went wrong";
        });
    $scope.myInterval = 3000;
};

home.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'app/home/home.html',
    controller: ''
  });
}])

/*

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];



// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }

    // When the user clicks the button, open the modal
    btn.onclick = function() {
        modal.style.display = "block";
    }

// When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }
}
*/



/*
home.controller('popoverCtrl', function($scope) {
 $scope.showPopover = function() {
 $scope.popoverIsVisible = true;
 };

 $scope.hidePopover = function() {
 $scope.popoverIsVisible = false;
 };
 });*/

/*
 home.controller('ItemsCtrl', function($scope, $http) {
 $http.get('app/data/items_top.json')
 .then(function(response) {
 $scope.items = response.data;
 }, function (response) {
 $scope.items = "Somethig went wrong";
 });
 });
 */
