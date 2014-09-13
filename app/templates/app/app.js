try {
  angular.module('partials');
} catch (e) {
  angular.module.call(window, 'partials', []);
}

angular.module('<%= _.camelize(appName) %>', [<% if(libraries["ui-router"]) { %>
  'ngAnimate',<% } if(libraries["angular-resource"]) { %>
  'ngResource',<% } if(libraries["angular-cookies"]) { %>
  'ngCookies',<% } if(libraries["restangular"]) { %>
  'restangular',<% } %>
  'ui.router',
  'partials'
]);

angular.module('<%= _.camelize(appName) %>').config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
  // <% if(includeExamples) { %>

  $stateProvider.state('home', {
    url: '/',
    templateUrl: '/common/partials/home/home.partial.html',
    controller: 'Home',
    resolve: {
      features: function (features) {
        return  features.getAll();
      }
    }
  });

  //  <% } %>

/* Add New States Above */

  $locationProvider.html5Mode(true);
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
