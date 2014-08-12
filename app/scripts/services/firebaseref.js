'use strict';

/**
 * @ngdoc service
 * @name whimApp.firebaseRef
 * @description
 * # firebaseRef
 * Factory in the whimApp.
 */
angular.module('whimApp')
  .factory('firebaseRef', function (Firebase, FBURL) {
    function pathRef(args) {
      for (var i = 0; i < args.length; i++) {
        if (typeof(args[i]) === 'object') {
          args[i] = pathRef(args[i]);
        }
      }
      return args.join('/');
    }

    return function () {
      return new Firebase(pathRef([FBURL].concat(Array.prototype.slice.call(arguments))));
    };

  });
