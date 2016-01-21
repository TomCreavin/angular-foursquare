'use strict';

angular.module('myApp.foursquare', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
$routeProvider.when('/foursquare', {
    templateUrl: 'foursquare/foursquareSearch.html',
    controller: 'FourSquareCtrl'
  });
}])

.controller('FourSquareCtrl', [function() {
	$scope.nearby = "London";
    $scope.query = "";

    /* contact foursquare api here */
}]);