'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.mood',
  'myApp.basic',
  'myApp.start',
  'myApp.home.carousel',
<<<<<<< HEAD
  'myApp.outfits',
  'myApp.favorites'
=======
  'myApp.outfits'

>>>>>>> c2030ab818f349a0f6a2aab201b3aee5f8a5a69b
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.otherwise({redirectTo: '/start'}); //Vår startsida, vilket kommer vara den sidan man kommer till om man trycker på loggan.
}]);