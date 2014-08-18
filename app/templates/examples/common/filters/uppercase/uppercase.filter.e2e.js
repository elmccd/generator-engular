/* jshint -W117, -W109 */
/* ignore not defined and single quotes */
describe('<%= appName %> - filter uppercase', function () {

  beforeEach(function () {
    browser.get('http://localhost:5001/#/api/<%= appName %>.filter:uppercase');
  });

  it('should return empty string if model is not defined', function () {
    expect(element(by.binding('text')).getText()).toBe('');
  });

  it('should filter empty string', function () {
    element(by.model('text')).sendKeys('');
    expect(element(by.binding('text')).getText()).toBe('');
  });

  it('should return ENGULAR! for engular! string', function () {
    element(by.model('text')).sendKeys('engular!');
    expect(element(by.binding('text')).getText()).toBe('ENGULAR!');
  });
});
