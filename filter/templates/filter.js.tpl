/**
 * @ngdoc filter
 * @name <%= module %>.filter:<%= name %>
 * @restrict EA
 * @param {[type]} [name] [description]
 * @description
 *
 * @example
 <doc:example module="<%= module %>">

 <doc:source>

 <!-- HTML source -->

 <style>
 /* CSS source * /
 </style>

 <script>
 // JS source
 </script>

 </doc:source>

 <doc:scenario>
 it('should equal', function() {
   expect(1).toBe(1);
 });
 </doc:scenario>

 </doc:example>
 */

!(function () {

  function <%= name %>Filter() {
    return function (input, arg) {
      return 'output';
    };
  }

  angular.module('<%= module %>').filter('<%= name %>', <%= name %>Filter);

})();

