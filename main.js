var config = {
    apiKey: "AIzaSyDGLY7Q37aWX9Rvp-x8tmCiIoNuPFhBug8",
    authDomain: "c-35-survey-app.firebaseapp.com",
    databaseURL: "https://c-35-survey-app.firebaseio.com",
    projectId: "c-35-survey-app",
    storageBucket: "c-35-survey-app.appspot.com",
    messagingSenderId: "93825221626",
    appId: "1:93825221626:web:1923a88f98d77d37239a43"


      };
  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var Ans=getInputVal('Ans');
    var Amount=getInputVal('Amount');
    var message = getInputVal('message');
    
    // Save message
    saveMessage(name, company, email, phone,Ans,Amount, message);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, company, email, phone,Ans,Amount, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      company:company,
      email:email,
      phone:phone,
      Ans:Ans,
      Amount:Amount,
      message:message
    });
  }