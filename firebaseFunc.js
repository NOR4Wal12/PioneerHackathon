document.getElementById("jumpButton").onclick = (event) =>{
    event.preventDefault()
    window.location.href="vision.html"
}

function pushStretchR(id, r2){
    email = localStorage.getItem("user")
    user = email.replaceAll(".","").replaceAll("#","").replaceAll("$",'').replaceAll("[","").replaceAll("]","")
    user = user.substring(0,user.indexOf("@"))
    data={
        id: id,
        value: r2
    }
    firebase.database().ref(user+'/stretches').push(data)
}

function pullStretch(){
    email = localStorage.getItem("user")
    user = email.replaceAll(".","").replaceAll("#","").replaceAll("$",'').replaceAll("[","").replaceAll("]","")
    user = user.substring(0,user.indexOf("@"))

    const stretchesRef = firebase.database().ref(user+"/stretches");
    info = []
    const stretchIds = ['butterfly', 'downwarddog', 'crescent', 'easy', 'triangle', 'reversewarrior', 'tree', 'warrior1', 'warrior2', 'warrior3']

    stretchesRef.on("value", (snapshot) => {
            snapshot.forEach(function(data){
                info.push({id:data.val().id, value:data.val().value})
            })
        }
    );

    for (let i = 0; i < stretchIds.length; i++){
        temp = true;
        for (let j = 0; j < info.length; j++){
            if (info[j].id == stretchIds[i]){
                temp = false;
            }
        }
        if (temp){
            info.push({id: stretchIds[i], value: 100})
        }
    }

    let highestValueIds = [];

    let max = -1;
    let ind = 0;
    for (let i = 0; i < info.length; i++){
        if (info[i].value > max){
            ind = i;
            max = info[i].value
        }
    }
    highestValueIds.push(info[ind].id)
    info.splice(ind, 1);
    console.log(highestValueIds)

    max = -1;
    ind = 0;
    for (let i = 0; i < info.length; i++){
        if (info[i].value > max){
            ind = i;
            max = info[i].value
        }
    }
    highestValueIds.push(info[ind].id)
    info.splice(ind, 1);
    console.log(highestValueIds)

    max = -1;
    ind = 0;
    for (let i = 0; i < info.length; i++){
        if (info[i].value > max){
            ind = i;
            max = info[i].value
        }
    }
    highestValueIds.push(info[ind].id)
    info.splice(ind, 1);
    console.log(highestValueIds)
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

