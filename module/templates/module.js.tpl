/**
 * @ngdoc overview
 * @name <%= _.camelize(name) %>
 * @description
 * <%= _.camelize(name) %> module
 */

!(function () {

  function <%= _.camelize(name) %>Config($stateProvider) {

    /* Add New States Above */
  }

  angular.module('<%= _.camelize(name) %>', ['ui.router']);
  angular.module('<%= _.camelize(name) %>').config(<%= _.camelize(name) %>Config);

})();

