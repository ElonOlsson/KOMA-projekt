'use strict';

var mood = angular.module('myApp.mood', ['ngRoute'])

mood.controller('FormCtrl', function($scope) {
	$scope.data = {
		gender: "default",
		currentMood: "default",
		style: "default"
	};
	console.log($scope.data);
	$scope.submitForm = function() {
		console.log($scope.data);
	}
});

mood.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/mood', {
    templateUrl: 'app/mood/mood.html',
    controller: ''  //<--- här lägger ni er controller om ni vill ha någon
  });
}])