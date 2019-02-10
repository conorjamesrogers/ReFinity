// assure created password matches

var config = {
  apiKey: "AIzaSyB-hOBjpeE7GHViS7HkO8ZuqEnUSK9x8Ks",
  authDomain: "refinity-75d88.firebaseapp.com",
  databaseURL: "https://refinity-75d88.firebaseio.com",
  projectId: "refinity-75d88",
  storageBucket: "refinity-75d88.appspot.com",
  messagingSenderId: "955524219940"
};
firebase.initializeApp(config);

var password = document.getElementById("password"), rep_password = document.getElementById("rep-password");

function validatePassword(){
  if(password.value != rep_password.value) {
    rep_password.setCustomValidity("Passwords Don't Match");
  } else {
    rep_password.setCustomValidity('');
  }
}

password.onchange = validatePassword;
rep_password.onkeyup = validatePassword;

function login() {
  firebase.auth().signInWithEmailAndPassword(
    $('#email-log').val(),
    $('#password-log').val()).then(
      () => {
        console.log("Sucess.");

      }
    ).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode == 'auth/wrong-password') {
          alert('Wrong Password.');
      }
      else if (errorCode == 'auth/invalid-email') {
        alert('The email address is invalid.');
      }
      else if (errorCode == 'auth/user-not-found') {
        alert('The email address has not yet checked, try signing up?');
      }
      else {
        alert(errorMessage);
      }

      console.log(error);
    });

}

// open form to create new account
$(document).ready(function() {
  $('.create').click(function () {
    console.log('ahoj.');
    $('.log-in').addClass('hide');
    $('.create-acc').removeClass('hide');
    $('.create').addClass('hide');
  });

  $('#login-btn').click(login);

  $('.create-btn').click(function () {
    if (!validatePassword()) {
      return;
    }
    firebase.auth().createUserWithEmailAndPassword(
      $('#email-sign').val(),
      $('#password').val()).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;

        if (errorCode == 'auth/email-already-in-use') {
          alert('The email has been used to register, try login?');
        }
        else if (errorCode == 'auth/invalid-email') {
          alert('The email address is invalid.');
        }
        else {
          alert(errorMessage);
        }

        console.log(error);
      });


  });
});
