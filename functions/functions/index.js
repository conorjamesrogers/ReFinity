const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

// Take the text parameter passed to this HTTP endpoint and insert it into the
// Realtime Database under the path /messages/:pushId/original

exports.addUser = functions.https.onCall((data, context) => {
    const uid = context.auth.uid;
    const name = data.name;
    return admin.database().ref(`users/${uid}`).set({
        credit: 100, name: name
    });
});

exports.getUserInfo = functions.https.onCall((data, context) => {
    const uid = context.auth.uid;
    return admin.database.ref(`users/${uid}/credit`).once('value').then(
        function (snapshot){
            return snapshot.val();
        }
    );
});