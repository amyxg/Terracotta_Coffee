//functions to call from forms
const loginForm = document.getElementById("login-form");
const loginErrorMsg = document.getElementById("login-error-msg");
const loginButton = document.getElementById("login-form-submit");

//login button for users, verifying with input data from forms 
loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "AmySantjer" && password === "123abc") {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})