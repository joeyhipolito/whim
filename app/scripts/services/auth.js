'use strict';

/**
 * @ngdoc service
 * @name whimApp.auth
 * @description
 * # auth
 * Factory in the whimApp.
 */
angular.module('whimApp')
  .factory('auth', function (firebaseRef, $firebase ,$firebaseSimpleLogin) {
    var ref = firebaseRef();
    var auth = $firebaseSimpleLogin(ref);

    return {
      login: function() {
        auth.$login('github', {
          rememberMe: true,
          scope: 'user,public_repo,read:org,gist'
        })
        .then(function(user) {
          if (user) {
            console.log(user);
            var userRef = firebaseRef('/users/' + user.id);
            var sync = $firebase(userRef);
            var record = sync.$asObject();

            record.$loaded().then(function(){
              if (record.id === undefined) {
                sync.$set({
                  id: user.id,
                  username: user.username,
                  displayName: user.displayName,
                  createdAt: Firebase.ServerValue.TIMESTAMP
                });
              }
            });
          }
        });
      }
    };


  });
