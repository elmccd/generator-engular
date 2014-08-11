angular.module('<%= module %>').directive('<%= name %>', function () {
  return {
    restrict: 'E',
    replace: true,
    scope: {

    },
    templateUrl: '<%= templateUrl %>',
    link: function (scope, element, attrs, fn) {


    }
  };
});
