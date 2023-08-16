// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
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


function addUser()
{
    user_name = document.getElementById("user_name").value;
  //  firebase.database().ref("/").child(user_name).update({
     //   purpose : "adding user"
  // });//
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



