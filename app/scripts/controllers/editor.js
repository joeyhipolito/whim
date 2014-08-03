'use strict';

/**
 * @ngdoc function
 * @name whimApp.controller:EditorCtrl
 * @description
 * # EditorCtrl
 * Controller of the whimApp
 */
angular.module('whimApp')
  .controller('EditorCtrl', function ($scope) {
    // The ui-codemirror option
    $scope.editorOptions = {
      lineWrapping : true,
      lineNumbers: true,
      mode: 'coffeescript',
      theme: 'monokai',
      tabSize: 2,
      fullScreen: true
    };
  });
