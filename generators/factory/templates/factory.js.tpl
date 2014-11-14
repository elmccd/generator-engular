/**
 * @ngdoc factory
 * @name <%= module %>.factory:<%= name %>
 * @description
 * Very important methods.
 */
(function () {

  function <%= name %>() {

    return {
      /**
       * @ngdoc method
       * @name <%= module %>.factory:<%= name %>#boo
       * @methodOf <%= module %>.factory:<%= name %>
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
