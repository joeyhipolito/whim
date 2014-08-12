'use strict';

/**
 * @ngdoc overview
 * @name whimApp
 * @description
 * # whimApp
 *
 * Main module of the application.
 */
angular
  .module('whimApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ui.codemirror',
    'firebase',
    'ionic'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');

    var home = {
      name: 'home',
      url: '/',
      templateUrl: 'views/home.html',
      controller: 'LoginCtrl'
    };

    var explorer = {
      name : 'explorer',
      templateUrl : 'views/templates/left-sidebar.html'
    };

    var explorerAccount = {
      name: 'explorer.account',
      url: '/account',
      parent: explorer,
      templateUrl: 'views/template.html',
      controller: function($state, $scope, $ionicSideMenuDelegate, auth,  $rootScope) {
        $scope.leftSideMenu = {
          isOpen: function() {
            return $ionicSideMenuDelegate.isOpenLeft();
          }
        };

        $scope.logout = function() {
          auth.logout();
        };

        // events
        $rootScope.$on("$firebaseSimpleLogin:login", function(e, user) {
          $state.go('explorer.account');
        });

        $rootScope.$on("$firebaseSimpleLogin:logout", function(e, user) {
          $state.go('home');
        });

      }
    };

    $stateProvider
      .state(home)
      .state(explorer)
      .state(explorerAccount);

  });
