/**
 * @ngdoc directive
 * @name <%= appName %>.directive:greetings
 * @restrict EA
 * @param {string} to targeting person
 *
 * @description
 * Display greetings.
 *
 * @example
 <doc:example module="<%= appName %>">

 <doc:source>

 <greetings to="Engular"></greetings>

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

  function greetings() {
    return {
      restrict: 'EA',
      scope: {
        to: '@'
      },
      templateUrl: 'common/directives/greetings/greetings.directive.html'
    };
  }

  angular.module('<%= appName %>').directive('greetings', greetings);

})();
