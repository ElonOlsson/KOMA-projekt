'use strict';

var favs = angular.module('myApp.favorites', ['ngRoute'])

favs.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/favorites', {
        templateUrl: 'app/favorites/favorites.html',
        controller: ''
    });
}])


