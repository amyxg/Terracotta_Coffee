// Variable to count number of attempts.
var attempt = 3; 

//Executes on click of login button.
function validate(){
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	if ( username == "AmySantjer" && password == "123abc"){
		alert ("Login successfully");
		window.location = "index.html"; // Redirecting to other page.
	return false;
	}
	else{
		attempt --;// Decrementing by one.
		alert("You have "+attempt+" attempt left.");
	// Disabling fields after 3 attempts.
	if( attempt == 0){
	document.getElementById("username").disabled = true;
	document.getElementById("password").disabled = true;
	document.getElementById("submit").disabled = true;
	return false;}
	}
}

/* function registerUser(){

  (function (){
    if( document.getElementById('uname').value==='' || document.getElementById('pw').value==='' ||
    document.getElementById('mail1').value==='' || document.getElementById('mail2').value==='' ||
    document.getElementById('mob').value==='' || document.getElementById('mob').value===''){
      alert('please fill all the fields');
    }
    else if( document.getElementById('mail1').value!==document.getElementById('mail2').value ){
      alert('Please enter the same email');
    }
    else{
      localStorage.setItem("mail1", document.getElementById('mail1').value);
      localStorage.setItem("mail2", document.getElementById('mail2').value);
      localStorage.setItem("username1", document.getElementById('uname').value);
      localStorage.setItem("password1", document.getElementById('pw').value);
      localStorage.setItem("dob", document.getElementById('dob').value);
      localStorage.setItem("mob", document.getElementById('mob').value);
      window.location.href = "C:\Users\xionga4711\Desktop\something\logIn.html";
    }
  })();
  
}

function logInUser(){
  if( document.getElementById('user').value===localStorage.getItem("username1") &&
  document.getElementById('password').value===localStorage.getItem("password1") ){
    window.location.href = "C:\Users\xionga4711\Desktop\something\index.html";
  }
  else{
    alert('Please enter a valid username or password');
  }
} */

