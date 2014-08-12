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
      controller: function($scope, $ionicSideMenuDelegate) {
        $scope.leftSideMenu = {
          isOpen: function() {
            return $ionicSideMenuDelegate.isOpenLeft();
          }
        };
      }
    };

    $stateProvider
      .state(home)
      .state(explorer)
      .state(explorerAccount);

  });
