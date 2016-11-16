'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.mood',
  'myApp.outfits'//<--- Här lägger ni till era moduler se home.js
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/home'}); //Vår startsida, vilket kommer vara den sidan man kommer till om man trycker på loggan.
}]);