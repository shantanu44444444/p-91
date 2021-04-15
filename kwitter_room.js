//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDjrZyr6czJbAxINwyxMKPKPyBbLSMXIcg",
      authDomain: "kwitter-45a6a.firebaseapp.com",
      projectId: "kwitter-45a6a",
      storageBucket: "kwitter-45a6a.appspot.com",
      messagingSenderId: "746946966037",
      appId: "1:746946966037:web:a10a47bd94b9557c16541c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code

                  //End code
            });
      });
}
getData();
