'use strict';

angular.module('myApp.foursquare', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
$routeProvider.when('/foursquare', {
    templateUrl: 'foursquare/foursquareSearch.html',
    controller: 'FourSquareCtrl'
  });
}])

.controller('FourSquareCtrl', ['$scope', 'search', function($scope, search) {
	$scope.nearby = "London";
    $scope.query = "";
    $scope.places = [];
	$scope.address = [];

    /* contact foursquare api here */

     function getPlaces() {


	        search.get({ near: $scope.nearby, query: $scope.query }, function (results) {

	            if (results.response.groups) {
	                $scope.places = results.response.groups[0].items;
	                $scope.totalRecordsCount = results.response.totalResults;
	            }
	            else {
	                $scope.places = [];
	                $scope.totalRecordsCount = 0;
	            }
	        });
    };

     $scope.search = function () {

	        getPlaces();
	    };
}]);