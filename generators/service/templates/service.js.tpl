/**
 * @ngdoc overview
 * @name <%= module %>.service:<%= name %>
 * @description
 */

(function () {

  function <%= name %>Service() {
    var <%= name %> = {};

    return <%= name %>;
  }

  angular.module('<%= module %>').factory('<%= name %>Factory', <%= name %>Service);

})();
