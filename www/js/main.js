
function getCreditScore() {
    var user = firebase.auth().currentUser;
    user.getIdToken(true).then(function(idToken) {
        var getCredit = firebase.functions().httpsCallable('getCredit');
        getCredit().then(function(result){ 
          console.log(`get credit = ${result.credit}`);
          $(".credit-box").update(result.credit);
          window.location = "/main_interface.html.html";
        }).catch(function(error) {
          var code = error.code;
          var message = error.message;
          var details = error.details;
          console.log(message);
        }); });
}

$(document).ready(getCreditScore);