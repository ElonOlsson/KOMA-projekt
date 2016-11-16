'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.mood',
  'myApp.start', //<--- Här lägger ni till era moduler se home.js
  'myApp.home.carousel',
  'myApp.outfits' 
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.otherwise({redirectTo: '/home'}); //Vår startsida, vilket kommer vara den sidan man kommer till om man trycker på loggan.
}]);