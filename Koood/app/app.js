'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.home',
<<<<<<< HEAD
  'myApp.mood',
  'myApp.start' //<--- Här lägger ni till era moduler se home.js
=======
  'myApp.home.carousel',
  'myApp.mood',
  'myApp.outfits' 
>>>>>>> 36cd730b9536c520d5343e7a140c72302b2e68d6
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

<<<<<<< HEAD
  $routeProvider.otherwise({redirectTo: '/Start'}); //<--- Här skriver ni er startsida
=======
  $routeProvider.otherwise({redirectTo: '/home'}); //Vår startsida, vilket kommer vara den sidan man kommer till om man trycker på loggan.
>>>>>>> 36cd730b9536c520d5343e7a140c72302b2e68d6
}]);