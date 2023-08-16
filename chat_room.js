var firebaseConfig = {
    apiKey: "AIzaSyCm7xVBiGjLzfnHH48v2OyzKqR9dhdgyzU",
    authDomain: "chatapp-6ca57.firebaseapp.com",
    projectId: "chatapp-6ca57",
    storageBucket: "chatapp-6ca57.appspot.com",
    messagingSenderId: "858841294711",
    appId: "1:858841294711:web:7e58ae9f9a24c9b8c42372"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name-"+Room_names);
    row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML +=row;
    //End code
    });});}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name",name);
   //window.location="chat_room.html";   
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
    console.log(1);
}

function addRoom()
{
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose:"adding room name"
    })
    localStorage.getItem("room_name",room_name)
    localStorage.setItem("room_name",room_name);
    window.location="chat_page.html";
}



