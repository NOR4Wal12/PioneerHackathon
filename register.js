const signupButton = document.getElementById('loginFooter');
const emailField = document.getElementById("emailField")
var passwordField = document.getElementById("passwordField")
const googleLogin = document.getElementById('googleLoginBox')
const errorLabel = document.getElementById('errorLabel')

passwordField.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      signupButton.click();
    }
  });

signupButton.onclick = (event) =>{
    event.preventDefault()
    errorLabel.innerHTML = "."; 
    const email = emailField.value
    const password = passwordField.value
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        localStorage.setItem("loggedIn","yes")
        localStorage.setItem("user", email)
        user = email.replaceAll(".","").replaceAll("#","").replaceAll("$",'').replaceAll("[","").replaceAll("]","")
        user = user.substring(0,user.indexOf("@"))
        database.ref(user+'/data').set({data: false}).then(()=>{
            window.location.href="home.html"
        })    
    })
    .catch((error) => {
        errorLabel.className="";
        errorMessage = error.message
        errorLabel.innerHTML = errorMessage;    
    })
}


googleLogin.onclick = (event) => {
    event.preventDefault()
    errorLabel.innerHTML = "."; 
    provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
        localStorage.setItem("loggedIn","yes")
        profile = result.user.providerData[0];
        email = profile.email
        localStorage.setItem("user", email)
        user = email.replaceAll(".","").replaceAll("#","").replaceAll("$",'').replaceAll("[","").replaceAll("]","")
        user = user.substring(0,user.indexOf("@"))
        database.ref(user+'/status').set({data: false}).then(()=>{
            window.location.href="home.html"
        }) 
    }).catch(function(error) {
        errorLabel.className="";
        errorMessage = error.message
        errorLabel.innerHTML = errorMessage;  
    });
}