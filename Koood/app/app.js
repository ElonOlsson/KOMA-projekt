'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.mood',
<<<<<<< HEAD
  'myApp.home.carousel',
  'myApp.mood',
  'myApp.outfits',
    'myApp.start'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/Start'}); //<--- Här skriver ni er startsida
=======
  'myApp.start',
  'myApp.home.carousel',
  'myApp.outfits'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.otherwise({redirectTo: '/start'}); //Vår startsida, vilket kommer vara den sidan man kommer till om man trycker på loggan.
>>>>>>> 3717d582d01a88bfbca57edd61db3a72e431aea5
}]);