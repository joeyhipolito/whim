'use strict';

/**
 * @ngdoc service
 * @name whimApp.auth
 * @description
 * # auth
 * Factory in the whimApp.
 */
angular.module('whimApp')
  .factory('auth', function (firebaseRef, $firebaseSimpleLogin) {
    var ref = firebaseRef();
    var auth = $firebaseSimpleLogin(ref);

    return {
      login: function() {
        auth.$login('github', {
          rememberMe: true,
          scope: 'user,public_repo,read:org,gist'
        })
        .then(function(user) {
          console.log(user);
        });
      }
    }


  });
