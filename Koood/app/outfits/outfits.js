'use strict';

angular.module('myApp.outfits', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/outfits', {
            templateUrl: 'app/outfits/outfits.html',
            controller: ''  //<--- här lägger ni er controller om ni vill ha någon
        });
    }])