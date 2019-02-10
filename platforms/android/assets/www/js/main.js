$(document).ready(
    function() {
        var user = firebase.auth().currentUser;        
        user.getIdToken(true).then(function(idToken) {
            var getCredit = firebase.functions().httpsCallable('getCredit');
            addUser().then(function(result){ 
              console.log(`get credit = ${result.credit}`);
              window.location = "/main_interface.html.html";
            }).catch(function(error) {
              var code = error.code;
              var message = error.message;
              var details = error.details;
              console.log(message);
            });
        var addUser = firebase.functions().httpsCallable('addUser');
        $(".credit-box").update()
    }
);