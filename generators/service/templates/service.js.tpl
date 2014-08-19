/**
 * @ngdoc service
 * @name <%= module %>.service:<%= name %>
 * @description
 * Very important methods.
 */
(function () {

  function <%= name %>() {

    return {
      /**
       * @ngdoc method
       * @name <%= module %>.service:<%= name %>#boo
       * @methodOf <%= module %>.service:<%= name %>
       * @description
       * desc
       *
       * @returns {String} boo!
       */
      boo: function () {
        return 'boo!';
      }
    };
  }

  angular.module('<%= module %>').factory('<%= name %>', <%= name %>);

})();
