'use strict';

/**
 * @ngdoc function
 * @name whimApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the whimApp
 */
angular.module('whimApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
