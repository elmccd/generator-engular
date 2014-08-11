angular.module('<%= _.camelize(appName) %>', ['ui.bootstrap', 'ui.utils', 'ui.router', 'ngAnimate']);

angular.module('<%= _.camelize(appName) %>').config(function ($stateProvider, $urlRouterProvider, $locationProvider) {


  /* Add New States Above */

 // $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');

});

angular.module('<%= _.camelize(appName) %>').run(function ($rootScope) {

  $rootScope.safeApply = function (fn) {
    var phase = $rootScope.$$phase;
    if (phase === '$apply' || phase === '$digest') {
      if (fn && (typeof(fn) === 'function')) {
        fn();
      }
    } else {
      this.$apply(fn);
    }
  };

});
