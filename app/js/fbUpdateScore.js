
  var myDataRef = new Firebase('https://holidayjs.firebaseio.com/');

  var CLIENTID = localStorage.getItem('clientId');
  var USERNAME = localStorage.getItem('name');

  function updateScore(turns){
    var name = USERNAME;
    var turns = turns;
    var clientId = CLIENTID;

    var usersRef = myDataRef.child("Users");
    var userRef = usersRef.child(name);

    var userClientIdRef = userRef.child("clientId");
    var userNameRef = userRef.child("username");
    var userTurnsRef = userRef.child("turns");

    userClientIdRef.set(clientId);
    userNameRef.set(name);
    userTurnsRef.set(turns);
  }
