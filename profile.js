button = document.getElementById("openSidebar")
function openNav(){
    document.getElementById("sidebar").style.width="350px";
    button.onclick = closeNav
}

function closeNav(){
    document.getElementById("sidebar").style.width="0";
    button.onclick = openNav
}

nameBox = document.getElementById("profileName")
name = localStorage.getItem("name")
nameBox.innerHTML = name

logoutButton = document.getElementById("logout")
logoutButton.onclick = () =>{
    localStorage.setItem("loggedIn", "null")
    localStorage.setItem("name", "null")
    localStorage.setItem("user", "null")
    window.location.href="index.html"
}

function suggestedWorkout(){
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
    if (max == 100){
        completelyRandom = true;
    }
    highestValueIds.push(info[ind].id)
    info.splice(ind, 1);
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

    randomInd = Math.floor(Math.random() * info.length);

    highestValueIds.push(info[randomInd].id)
    info.splice(randomInd, 1);

    randomInd = Math.floor(Math.random() * info.length);

    highestValueIds.push(info[randomInd].id)
    info.splice(randomInd, 1);

    sessionStorage.getItem(highestValueIds);
    window.location.href="vision.html"
    
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
            sessionStorage.setItem("workout", ['null'])
        }
        else {
            current = current.array
            sessionStorage.setItem("workout", current)
        }

        for (let i = 0; i < current.length; i++){
            str += (i + 1) + ". " + toDisplay(current[i]) + "</br>";
        }

        if (str == ""){
            str = "None currently planned!"
        }

        document.getElementById("list").innerHTML = str;
    })

    pullStretch();
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

    str = "";
    for (let i = 0; i < highestValueIds.length; i++){
        str += (i + 1) + ". " + toDisplay(highestValueIds[i]) + "</br>";
    }

    document.getElementById("suggestedList").innerHTML = str;
}
