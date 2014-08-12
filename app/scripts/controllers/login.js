'use strict';

/**
 * @ngdoc function
 * @name whimApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the whimApp
 */
angular.module('whimApp')
  .controller('LoginCtrl', function ($state, $scope, auth, $rootScope, $firebaseSimpleLogin, firebaseRef) {

    // construct
    $firebaseSimpleLogin(firebaseRef())
      .$getCurrentUser()
      .then(function(user){
        if (user) {
          console.log(user);
          $state.go('explorer.account');
        }
      });

    // scope

    $scope.login = function() {
      auth.login();
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

  });
