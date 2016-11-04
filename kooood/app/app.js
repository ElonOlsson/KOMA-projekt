'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.styler', 
  'myApp.menu'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
	$locationProvider.hashPrefix('!');

	// Set default view to home
	$routeProvider.otherwise({
		redirectTo: '/home'
	});
}]);
