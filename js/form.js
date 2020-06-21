  // Your web app's Firebase configuration
 
  var firebaseConfig = {
    apiKey: "AIzaSyB8SQMYrIzedCRq4XYsJUjr93iVOJ4QjmM",
    authDomain: "porfolio2-4bdac.firebaseapp.com",
    databaseURL: "https://porfolio2-4bdac.firebaseio.com",
    projectId: "porfolio2-4bdac",
    storageBucket: "porfolio2-4bdac.appspot.com",
    messagingSenderId: "61191866431",
    appId: "1:61191866431:web:3c26f365604cad3888908a",
    measurementId: "G-ERWZV58ET4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
 
  var messagesRef = firebase.database().ref('messages');

// listen for form submit
document.getElementById('form').addEventListener('submit', submitForm);

//submit form 
function submitForm(e){
    e.preventDefault();
    
    //get values
    
 var email = getInputVal('email');
 var contact = getInputVal('contact');
 var message = getInputVal('message');
 saveMessage(email, message, contact);
}
//function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}
//function to save messages to firebase
function saveMessage(email, message, contact){
    var newMessageRef = messagesRef.push()
    newMessageRef.set({
        email: email,
        message: message,
        contact: contact 
        
    })
}