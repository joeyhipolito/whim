'use strict';

/**
 * @ngdoc function
 * @name whimApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the whimApp
 */
angular.module('whimApp')
  .controller('LoginCtrl', function ($scope, auth) {

    $scope.login = function() {
      auth.login();
    };

  });
