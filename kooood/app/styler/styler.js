'use strict';

angular.module('myApp.styler', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/styler', {
    templateUrl: 'styler/styler.html',
    controller: 'StylerCtrl'
  });
}])

.controller('StylerCtrl', [function() {

}]);