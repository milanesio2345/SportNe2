initializeFirebase();

function initializeFirebase() {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB4QdbGnBGzk0JiUhTJbRBpT6oCuUfslWo",
    authDomain: "sportnet-d5d3d.firebaseapp.com",
    databaseURL: "https://sportnet-d5d3d.firebaseio.com",
    projectId: "sportnet-d5d3d",
    storageBucket: "sportnet-d5d3d.appspot.com",
    messagingSenderId: "847747808762"
  };

  firebase.initializeApp(config);

  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      $("#navbar_register").html('<i class="material-icons left">account_box</i>' + user.displayName + '</a>');
    } else{
      $("#navbar_register").html('<i class="material-icons left">account_box</i>Register</a>');
    }
  });
}

function myGoogle() {

  var provider = new firebase.auth.GoogleAuthProvider();

firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});

}

$(document).ready(function(){
    $('.materialboxed').materialbox();
  });



       
  
