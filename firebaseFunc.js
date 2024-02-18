function pushStretchR(id){
    r2 = document.getElementById("testFirebaseInput").value
    email = localStorage.getItem("user")
    user = email.replaceAll(".","").replaceAll("#","").replaceAll("$",'').replaceAll("[","").replaceAll("]","")
    user = user.substring(0,user.indexOf("@"))
    if (id == "butterfly"){
        database.ref(user + '/stetches').set({'butterfly':r2}).then((snapshot)=>{})
    } else if (id == "downwarddog"){
        database.ref(user + '/stetches').set({'downwarddog':r2}).then((snapshot)=>{})
    } else if (id == "crescent"){
        database.ref(user + '/stetches').set({'crescent':r2}).then((snapshot)=>{})
    } else if (id == "easy"){
        database.ref(user + '/stetches').set({'easy':r2}).then((snapshot)=>{})
    } else if (id == "triangle"){
        database.ref(user + '/stetches').set({'triangle':r2}).then((snapshot)=>{})
    } else if (id == "reversewarrior"){
        database.ref(user + '/stetches').set({'reversewarrior':r2}).then((snapshot)=>{})
    } else if (id == "tree"){
        database.ref(user + '/stetches').set({'tree':r2}).then((snapshot)=>{})
    } else if (id == "warrior1"){
        database.ref(user + '/stetches').set({'warrior1':r2}).then((snapshot)=>{})
    } else if (id == "warrior2"){
        database.ref(user + '/stetches').set({'warrior2':r2}).then((snapshot)=>{})
    } else if (id == "warrior3"){
        database.ref(user + '/stetches').set({'warrior3':r2}).then((snapshot)=>{})
    }
}


function addWorkout(name){
    email = localStorage.getItem("user")
    user = email.replaceAll(".","").replaceAll("#","").replaceAll("$",'').replaceAll("[","").replaceAll("]","")
    user = user.substring(0,user.indexOf("@"))
    var str = "";
    database.ref(user+'/custom').once('value').then((snapshot)=>{
        current = snapshot.val()
        if (current == null){
            current = []
        }
        else {
            current = current.array
        }

        if (current.length >= 15) {
            alert("Your custom workout plan has more than 15 planned stretches! This might tire you out! Try hitting the 'clear list' button to remake your custom plan!")
        }
        else {
            current.push(name)

            for (let i = 0; i < current.length; i++){
                str += (i + 1) + ". " + toDisplay(current[i]) + "</br>";
            }
            
            database.ref(user + '/custom').set({array:current}).then((snapshot)=>{})
            document.getElementById("list").innerHTML = str;
        }
        
        sessionStorage.setItem("workout", current)
    })
}

function clearCustom(){
    email = localStorage.getItem("user")
    user = email.replaceAll(".","").replaceAll("#","").replaceAll("$",'').replaceAll("[","").replaceAll("]","")
    user = user.substring(0,user.indexOf("@"))
    database.ref(user + '/custom').set({array:[]}).then((snapshot)=>{})
    document.getElementById("list").innerHTML = "None currently planned!";
    sessionStorage.setItem("workout", ["null"])
}

function toDisplay(id){
    if (id == 'butterfly'){
        return "Butterfly Pose"
    } else if (id == 'downwarddog'){
        return "Toe Touch Pose"
    } else if (id == 'crescent'){
        return "Crescent Pose"
    } else if (id == 'easy'){
        return "Easy Pose"
    } else if (id == 'triangle'){
        return "Triangle Pose"
    } else if (id == 'reversewarrior'){
        return "Reverse Warrior Pose"
    } else if (id == 'tree'){
        return "Tree Pose"
    } else if (id == 'warrior1'){
        return "Star Pose"
    } else if (id == 'warrior2'){
        return "Warrior II Pose"
    }else if (id == 'warrior3'){
        return "Warrior III Pose"
    }
}
button = document.getElementById("openSidebar")
function openNav(){
    document.getElementById("sidebar").style.width="350px";
    button.onclick = closeNav
}

function closeNav(){
    document.getElementById("sidebar").style.width="0";
    button.onclick = openNav
}
function loadList(){
    if(localStorage.getItem("loggedIn")!="yes"){
      window.location.href = "index.html";
    }
    email = localStorage.getItem("user")
    user = email.replaceAll(".","").replaceAll("#","").replaceAll("$",'').replaceAll("[","").replaceAll("]","")
    user = user.substring(0,user.indexOf("@"))
    var str = "";
    database.ref(user+'/custom').once('value').then((snapshot)=>{
        current = snapshot.val()
        if (current == null){
            current = []
        }
        else {
            current = current.array
        }
        sessionStorage.setItem("workout", current)

        for (let i = 0; i < current.length; i++){
            str += (i + 1) + ". " + toDisplay(current[i]) + "</br>";
        }

        if (str == ""){
            str = "None currently planned!"
        }

        document.getElementById("list").innerHTML = str;
    })
}

