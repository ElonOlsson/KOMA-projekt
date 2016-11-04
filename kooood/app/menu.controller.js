angular.module('myApp.menu', []);

angular.module('myApp.menu').controller('menuCtrl', ['$scope', '$location', function($scope, $location){
	$scope.isActive = function(path) {
		 return $location.path() == path;
	}
}]);