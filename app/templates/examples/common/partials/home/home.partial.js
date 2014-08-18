/**
 * @ngdoc overview
 * @name <%= appName %>.controller:Home
 * @description
 *
 * Description of Home controller
 *
 */

(function () {

  function Home($scope, features) {
    $scope.features = features;
  }

  angular.module('<%= appName %>').controller('Home', Home);

})();
