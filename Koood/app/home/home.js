'use strict';

var home = angular.module('myApp.home', ['ui.bootstrap', 'ngRoute'])

var carousel = angular.module('myApp.home.carousel', []);
carousel.controller('CarouselCtrl', CarouselCtrl);

function CarouselCtrl($scope, $http){
    $http.get('app/data/items.json')
        .then(function(response) {
            $scope.items = response.data;
        }, function(response) {
            $scope.items = "Somethig went wrong";
        });
    $scope.myInterval = 3000;
};

/*home.controller('popoverCtrl', function($scope) {
  $scope.showPopover = function() {
    $scope.popoverIsVisible = true;
  };

  $scope.hidePopover = function() {
    $scope.popoverIsVisible = false;
  };
});*/

home.controller('ItemsCtrl', function($scope, $http) {
    $http.get('app/data/items.json')
        .then(function(response) {
            $scope.items = response.data;
        }, function (response) {
            $scope.items = "Somethig went wrong";
        });
});

home.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'app/home/home.html',
    controller: ''
  });
}])

/*
home.controller('CarouselCtrl', CarouselCtrl);

function CarouselCtrl($scope){
  $scope.myInterval = 3000;
  $scope.noWrapSlides = false;
  $scope.activeSlide = 0;
  $scope.slides = [
    {
      image: 'http://lorempixel.com/400/200/'
    },
    {
      image: 'http://lorempixel.com/400/200/food'
    },
    {
      image: 'http://lorempixel.com/400/200/sports'
    },
    {
      image: 'http://lorempixel.com/400/200/people'
    }
  ];
}

home.config(function($routeProvider) {
  $routeProvider.when('/home', {
        templateUrl: 'app/home/home.html',
        controller: 'CarouselCtrl'
      })
});
x
home.controller('CarouselCtrl', function($scope) {
  $scope.myInterval = 3000;
  console.log($scope.myInterval);
});

home.controller('CarouselCtrl', function($scope){
  $scope.myInterval = 3000;
  $scope.slides = [
    {
      image: 'http://lorempixel.com/400/200/'
    },
    {
      image: 'http://lorempixel.com/400/200/food'
    },
    {
      image: 'http://lorempixel.com/400/200/sports'
    },
    {
      image: 'http://lorempixel.com/400/200/people'
    }
  ];
});
*/

