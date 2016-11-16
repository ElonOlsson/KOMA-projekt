'use strict';

angular.module('myApp.start', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/start', {
    templateUrl: 'app/start/Start.html',
    controller: ''  //<--- här lägger ni er controller om ni vill ha någon
  });
}])