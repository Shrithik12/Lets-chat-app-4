
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyAGOP9hPjcLk55oNow5cvU6NyD1cX3QGbU",
    authDomain: "kwitter-3e690.firebaseapp.com",
    databaseURL: "https://kwitter-3e690-default-rtdb.firebaseio.com",
    projectId: "kwitter-3e690",
    storageBucket: "kwitter-3e690.appspot.com",
    messagingSenderId: "958163365026",
    appId: "1:958163365026:web:8294bb3e077e592c9f3bfb",
    measurementId: "G-R643QX2LXM"
  };
  firebase.initializeApp(firebaseConfig);


    user_name = localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML = "Welcome "+ user_name + "!";

    function addRoom(){

          room_name = document.getElementById("room_name").value;

          firebase.database().ref("/").child(room_name).update({
                purpose:"adding room name"
          });

          localStorage.setItem("room_name", room_name);

          window.location = "chat_page.html";
    }




function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
     console.log("Room Name - " + Room_names);
row = "<div class='room_name'id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;
   

    });});}
getData();

function redirectToRoomName(name){

    console.log(name);
    localStorage.setItem("room_name", name);
          window.location = "chat_page.html"

}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
          window.location="index.html";
}