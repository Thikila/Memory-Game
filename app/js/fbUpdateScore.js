
  var myDataRef = new Firebase('https://holidayjs.firebaseio.com/');

  function updateScore(turns){
    var name = localStorage.getItem('name');
    var clientId = localStorage.getItem('clientId');;

    var usersRef = myDataRef.child("Users");
    var userRef = usersRef.child(name);

    var userClientIdRef = userRef.child("clientId");
    var userNameRef = userRef.child("username");
    var userTurnsRef = userRef.child("turns");

    userClientIdRef.set(clientId);
    userNameRef.set(name);
    userTurnsRef.set(turns);
  }
