'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.mood',
  'myApp.start',
  'myApp.home.carousel',
  'myApp.outfits'
])

app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.otherwise({redirectTo: '/start'}); //Vår startsida, vilket kommer vara den sidan man kommer till om man trycker på loggan.
}]);