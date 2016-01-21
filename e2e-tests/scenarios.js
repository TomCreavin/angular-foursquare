'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('end to end structure', function() {

 it('should land on foursquare search', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/foursquare");
  });

});
