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
    'ionic'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/home.html'
      });


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

    var editor = {
      name: 'editor',
      url: '/editor',
      templateUrl: 'views/templates/right-sidebar.html'
    };

    $stateProvider
      .state(explorer)
      .state(explorerAccount)
      .state(editor);

  });
