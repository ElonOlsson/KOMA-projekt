'use strict';

angular.module('myApp.mood', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/mood', {
    templateUrl: 'app/mood/mood.html',
    controller: ''  //<--- här lägger ni er controller om ni vill ha någon
  });
}])