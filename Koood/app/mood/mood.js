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
	/*
	$scope.newValue = function() {
		console.log($scope.data.style);
		//data-target="#chooseStyle"
	}
	*/
});

mood.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/mood', {
    templateUrl: 'app/mood/mood.html',
    controller: ''  //<--- här lägger ni er controller om ni vill ha någon
  });

}])

function changeHappy(elementHappy) {
	elementHappy.src = elementHappy.bln ? "../Koood/app/images/smile.png" : "../Koood/app/images/happy_white.png";
	elementHappy.bln = !elementHappy.bln;  /* assigns opposite boolean value always */
}

function changeNeutral(elementNeutral) {
	elementNeutral.src = elementNeutral.bln ? "../Koood/app/images/straight.png" : "../Koood/app/images/Neutral_white.png";
	elementNeutral.bln = !elementNeutral.bln;  /* assigns opposite boolean value always */
}

function changeSad(elementSad) {
	elementSad.src = elementSad.bln ? "../Koood/app/images/sad_new.png" : "../Koood/app/images/sad_white.png";
	elementSad.bln = !elementSad.bln;  /* assigns opposite boolean value always */
}
function changeMale(elementMale) {
	elementMale.src = elementMale.bln ? "../Koood/app/images/Male.png" : "../Koood/app/images/Male_white.png";
	elementMale.bln = !elementMale.bln;  /* assigns opposite boolean value always */
}

function changeFemale(elementFemale) {
	elementFemale.src = elementFemale.bln ? "../Koood/app/images/Female.png" : "../Koood/app/images/Female_white.png";
	elementFemale.bln = !elementFemale.bln;  /* assigns opposite boolean value always */
}


function home() {
	window.location = "#!/home";
};

function hide(){
	document.getElementById("chooseStyle").classList.remove("in");
};

/* **************** TEST **************** */

