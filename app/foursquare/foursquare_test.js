'use strict';

describe('myApp.foursquare module', function() {


  beforeEach(module('myApp.foursquare'));
  beforeEach(module('fourSquareService'));

  describe('foursquare controller', function(){

    it('should inject controller', inject(function($controller) {
      //spec body
      var scope = {};
      var FourSquareCtrl = $controller('FourSquareCtrl',{$scope:scope});
      expect(FourSquareCtrl).toBeDefined();
    }));

	/*test using angular mock resource request
    beforeEach(module('myApp'));
  	beforeEach(module('fourSquareService'));

  	  var scope, ctrl, $httpBackend;

	    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
	      $httpBackend = _$httpBackend_;
	      $httpBackend.expectGET('https://api.foursquare.com/v2/venues/explore').
	          respond([{Groups: [{type: "Recommended Places"name: "recommended" items: [venue: {name: 'Test1'}]}}]);

	      scope = $rootScope.$new();
	      ctrl = $controller('FourSquareCtrl', {$scope: scope});
   		 }));

   		 it('should find two venues hardcoded in mock connector', function() {
		       expect(scope.places).toEqualData([]);
		       $httpBackend.flush();
		       expect(scope.places).toEqualData(
		           [{name: 'Test1'}]);
    	});*/

  });
});