/**
 * @ngdoc filter
 * @name <%= appName %>.filter:uppercase
 * @description
 * Return string in upper-case
 *
 * @example
 <doc:example module="<%= appName %>">

 <doc:source>
  <input ng-model="text"><br/>
  <span ng-bind="text | uppercase"></span>
 </doc:source>

 <doc:scenario>
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
 </doc:scenario>

 </doc:example>
 */

(function () {

  function uppercaseFilter() {
    return function (input) {
      return input ? input.toUpperCase() : '';
    };
  }

  angular.module('<%= appName %>').filter('uppercase', uppercaseFilter);

})();

