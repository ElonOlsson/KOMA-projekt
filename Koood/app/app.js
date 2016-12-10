'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.mood',
  'myApp.basic',
  'myApp.home.carousel',
  'myApp.favorites',
  'myApp.outfits'
])

app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {

  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/mood'}); //Vår startsida, vilket kommer vara den sidan man kommer till om man trycker på loggan.
}]);


function openNavigation() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
  document.getElementById("openNav").style.display = 'none';
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.body.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
  document.getElementById("openNav").style.display = "inline-block";
}