'use strict';

describe('myApp.foursquare module', function() {

  beforeEach(module('myApp.foursquare'));

  describe('check foursquare controller', function(){

    it('should exist', inject(function($controller) {
      //controller tests go here
      var FourSquareCtrl = $controller('FourSquareCtrl');
      expect(FourSquareCtrl).toBeDefined();
    }));

  });
});