'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.mood',
  'myApp.basic',
  'myApp.start',
  'myApp.home.carousel',
  'myApp.favorites',
  'myApp.outfits'
])

app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {

  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/start'}); //Vår startsida, vilket kommer vara den sidan man kommer till om man trycker på loggan.
}]);

function w3_open() {
  document.getElementById("main").style.marginLeft = "25%";
  document.getElementById("mySidenav").style.width = "25%";
  document.getElementById("mySidenav").style.display = "block";
  document.getElementById("openNav").style.display = 'none';
}
function w3_close() {
  document.getElementById("main").style.marginLeft = "0%";
  document.getElementById("mySidenav").style.display = "none";
  document.getElementById("openNav").style.display = "inline-block";
}

