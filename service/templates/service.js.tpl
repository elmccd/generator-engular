/**
 * @ngdoc overview
 * @name <%= module %>.controller:<%= ctrlname %>
 * @description
 */

!(function () {

  function <%= name %>Service() {
    var <%= name %> = {};

    return <%= name %>;
  }

  angular.module('<%= module %>').factory('<%= name %>', <%= name %>Service);

})();
