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
}

function checkIndex(){
  if(localStorage.getItem("loggedIn")=="yes"){
      window.location.href = "home.html";
  }
}

// r2 = percent
function pushStretchR(id){
    r2 = document.getElementById("testFirebaseInput").value
    email = localStorage.getItem("user")
    user = email.replaceAll(".","").replaceAll("#","").replaceAll("$",'').replaceAll("[","").replaceAll("]","")
    user = user.substring(0,user.indexOf("@"))
    if (id === 1){
        database.ref(user + '/stetches').set({1:r2}).then((snapshot)=>{})
    } else if (id == 2){
        database.ref(user + '/stetches').set({2:r2}).then((snapshot)=>{})
    } else if (id == 3){
        database.ref(user + '/stetches').set({3:r2}).then((snapshot)=>{})
    } else if (id == 4){
        database.ref(user + '/stetches').set({4:r2}).then((snapshot)=>{})
    } else if (id == 5){
        database.ref(user + '/stetches').set({5:r2}).then((snapshot)=>{})
    } else if (id == 6){
        database.ref(user + '/stetches').set({6:r2}).then((snapshot)=>{})
    } else if (id == 7){
        database.ref(user + '/stetches').set({7:r2}).then((snapshot)=>{})
    } else if (id == 8){
        database.ref(user + '/stetches').set({8:r2}).then((snapshot)=>{})
    } else if (id == 9){
        database.ref(user + '/stetches').set({9:r2}).then((snapshot)=>{})
    }
}

function pushCustomized(names){
    r2 = document.getElementById("testFirebaseInput").value
    email = localStorage.getItem("user")
    user = email.replaceAll(".","").replaceAll("#","").replaceAll("$",'').replaceAll("[","").replaceAll("]","")
    user = user.substring(0,user.indexOf("@"))

    // UNFINISHED
}
