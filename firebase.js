const firebaseConfig = {
    apiKey: "AIzaSyBnlpYazaSFHVyWYy3yyEzo47TRCB5IcMw",
    authDomain: "pioneerhack-e9ede.firebaseapp.com",
    databaseURL: "https://pioneerhack-e9ede-default-rtdb.firebaseio.com",
    projectId: "pioneerhack-e9ede",
    storageBucket: "pioneerhack-e9ede.appspot.com",
    messagingSenderId: "1006929338819",
    appId: "1:1006929338819:web:3e82bb46f56ea558f5dd76"
  };

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

  
function check(){
  if(localStorage.getItem("loggedIn")!="yes"){
      window.location.href = "index.html";
  }
    email = localStorage.getItem("user")
    user = email.replaceAll(".","").replaceAll("#","").replaceAll("$",'').replaceAll("[","").replaceAll("]","")
    user = user.substring(0,user.indexOf("@"))
    database.ref(user+'/custom').once('value').then((snapshot)=>{
        current = snapshot.val()
        if (current == null){
            current = []
            sessionStorage.setItem("workout", ["null"])
        }
        else {
            current = current.array
            sessionStorage.setItem("workout", current)
        }
    })
}

function checkIndex(){
  if(localStorage.getItem("loggedIn")=="yes"){
      window.location.href = "home.html";
  }
}
