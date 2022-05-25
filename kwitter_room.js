// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvWcNc8E6XMnU84rLtltFrx13iAYMKTsQ",
  authDomain: "class-8e23e.firebaseapp.com",
  databaseURL: "https://class-8e23e-default-rtdb.firebaseio.com",
  projectId: "class-8e23e",
  storageBucket: "class-8e23e.appspot.com",
  messagingSenderId: "707855019550",
  appId: "1:707855019550:web:fb4cdc39a290678252880f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById(output).innerHTML += row;
      });});}

getData();

userNAME=localStorage.getItem ("username input");
document.getElementById("h3-tag").innerHTML="Welcome " + userNAME;

function addRoom()
{

Room_name= document.getElementById("Room_names").value;
Firebase.database().ref("/").child(Room_name).update({
  purpose :"adding room name"
});

}

function redirectToRoomName(name)
{

console.log(name);
localStorage.setItem("Room_name", name);
window.location = "kwitter_page.html";

}


function Logout()
{
  localStorage.removeItem("username input"); 
 localStorage.removeItem("Room_name");
window.location="index.html";

}
