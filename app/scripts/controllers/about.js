'use strict';

/**
 * @ngdoc function
 * @name whimApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the whimApp
 */
angular.module('whimApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
