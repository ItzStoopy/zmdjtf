function Save()
{

user_name = document.getElementById("username input").value;
localStorage.setItem( "username input" , user_name);
window.location="kwitter_room.html";

}