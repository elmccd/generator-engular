/* jshint -W117, -W109 */
/* ignore not defined and single quotes */
describe('<%= appName %>', function () {

  beforeEach(function () {
    browser.get('http://localhost:5001/#/api/<%= appName %>.directive:greetings');
  });
  it('should return "Hello " model is not defined', function () {
    expect(element(by.css('greetings[to] span')).getText()).toBe('Hello');
  });

  it('should return "Hello ENGULAR!" for engular! string', function () {
    element(by.model('greatingsTarget')).sendKeys('engular!');
    expect(element(by.css('greetings[to] span')).getText()).toBe('Hello ENGULAR!');
  });
});
