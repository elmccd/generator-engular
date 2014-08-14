/**
 * @ngdoc directive
 * @name <%= module %>.directive:<%= name %>
 * @restrict EA
 * @param {[type]} [name] [description]
 *
 * @description
 *
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

(function () {

  function <%= name %>() {
    return {
      restrict: 'EA',
      scope: {

      },
      templateUrl: '<%= templateUrl %>',
      link: function (scope, element, attrs, fn) {

      }
    };
  }

  angular.module('<%= module %>').directive('<%= name %>', <%= name %>);

})();
