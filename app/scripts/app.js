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

    $stateProvider
      .state('template', {
        url: '/template',
        templateUrl: 'views/template.html'
      });

    $stateProvider
      .state('editor', {
        url: '/editor',
        templateUrl: 'views/editor.html',
        controller: 'EditorCtrl'
      });

  });
