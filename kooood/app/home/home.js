'use strict';

angular.module('myApp.home', ['ngRoute'])

//Declare route
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/home', {
		templateUrl: 'home/home.html',
		controller: 'HomeCtrl'
	});
}])

//Home controller
.controller('HomeCtrl', [function() {

}]);