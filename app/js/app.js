'use strict';
/* App Controllers */


var memoryGameApp = angular.module('memoryGameApp', []);


memoryGameApp.factory('game', function() {
  var tileNames = ['AuthO', 'famo', 'Firebase', 'frontendmasters', 'google', 'ionic',
    'microsoft', 'strongloop'];

  return new Game(tileNames, $timeout);
});


memoryGameApp.controller('GameCtrl', function GameCtrl($scope, game) {
  $scope.game = game;
  $scope.user = localStorage.getItem('name');
});


//usages:
//- in the repeater as: <mg-card tile="tile"></mg-card>
//- card currently being matched as: <mg-card tile="game.firstPick"></mg-card>

memoryGameApp.directive('mgCard', function() {
  return {
    restrict: 'E',
    // instead of inlining the template string here, one could use templateUrl: 'mg-card.html'
    // and then either create a mg-card.html file with the content or add
    // <script type="text/ng-template" id="mg-card.html">.. template here.. </script> element to
    // index.html
    template: '<div class="container">' +
                '<div class="card" ng-class="{flipped: tile.flipped}">' +
                  '<div class="image front"><img ng-src="img/back.png"></div>' +
                  '<div class="image back"><img ng-src="img/{{tile.title}}.png"></div>' +
                '</div>' +
              '</div>',
    scope: {
      tile: '='
    }
  }
});
