/* jshint -W117, -W109 */
/* ignore not defined and single quotes */
describe('Uppercase Filter', function() {

  beforeEach(function() {
    browser.get('http://localhost:5001/#/api/engularTests3.filter:uppercase2');
  });

  it("should have filter name in title", function() {
    browser.getTitle().then(function(title) {
      expect(title.indexOf('uppercase')).toBeGreaterThan(-1);
    });
  });

  it('should return empty string if model is not defined', function() {
    expect(element(by.binding('text')).getText()).toBe('');
  });

  it('should filter empty string', function() {
    element(by.model('text')).sendKeys('');
    expect(element(by.binding('text')).getText()).toBe('');
  });

  it('should return ENGULAR! for engular! string', function() {
    element(by.model('text')).sendKeys('engular!');
    expect(element(by.binding('text')).getText()).toBe('ENGULAR!');
  });
});
