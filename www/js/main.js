
var config = {
  apiKey: "AIzaSyB-hOBjpeE7GHViS7HkO8ZuqEnUSK9x8Ks",
  authDomain: "refinity-75d88.firebaseapp.com",
  databaseURL: "https://refinity-75d88.firebaseio.com",
  projectId: "refinity-75d88",
  storageBucket: "refinity-75d88.appspot.com",
  messagingSenderId: "955524219940"
};
firebase.initializeApp(config);

var functions = firebase.functions();

$(document).ready(function () {
  var user = firebase.auth().currentUser;
  user.getIdToken(true).then(function(idToken) {
      var getUserInfo = firebase.functions().httpsCallable('getUserInfo');
      getUserInfo().then(function(result){ 
        console.log(`get credit = ${result.credit}`);
        $(".credit-box").text(result.credit.toFixed());
        $("#username").text('For user: ' +  result.name);
        window.location = "/main_interface.html.html";
      }).catch(function(error) {
        var code = error.code;
        var message = error.message;
        var details = error.details;
        console.log(message);
      }); });
});