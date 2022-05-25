//YOUR FIREBASE LINKS
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
    
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;   
//Start code
console.log(firebase_message_id);
console.log(message_data);
message=message_data["message"];
likes=message_data["likes"];
user=message_data["name"];
name_with_tag="<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
message_with_tag="<h4 class='message_h4'>"+message+ "</h4>"
like_button = "<button class='bth bth-warning' id ="+firebase_message_id+" value="+likes+" onclick='updateLike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Likes:"+ likes+ " onclick='updateLike(this.id)>";
row=name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML=row;
//End code
      } });  }); }
getData();
function click()
{

sent = document.getElementById("text").value;
firebase.database().ref("Room_name").push({
name: user_name,
likes: 0,
message: sent, 

});
document.getElementById("text").value="";

}

function updateLike(message_id)
{

console.log("clicked on like button - "+ message_id);
button_id = message_id;
likes = document.getElementById(button_id).value;
updated_likes = Number(likes) + 1;
console.log(updated_likes);

firebase.database().ref(Room_name).child(message_id).update({
      like : updated_likes
});
}
function Logout()
{

  localStorage.removeItem("username input"); 
 localStorage.removeItem("Room_name");
window.location="index.html";

}
