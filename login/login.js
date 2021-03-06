angular.module( 'sample.login', [
  'auth0'
])
.controller( 'LoginCtrl', function HomeController( $scope, auth, $location, store ) {

  $scope.login = function() {
    auth.signin({}, function(profile, token) {
      store.set('profile', profile);
      store.set('token', token);
      localStorage.setItem('name', profile.name);
      localStorage.setItem('clientId', profile.user_id);
      document.location.href= '/Memory-Game/game.html';
    }, function(error) {
      console.log("There was an error logging in", error);
    });
  }

});
