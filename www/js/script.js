// assure created password matches
import * as firebase from '/firebase';

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




// open form to create new account
$(document).ready(function() {
    $('.create').click(function () {
        console.log('ahoj.');
        $('.log-in').addClass('hide');
        $('.create-acc').removeClass('hide');
        $('.create').addClass('hide');
    });
});
