button = document.getElementById("openSidebar")
function openNav(){
    document.getElementById("sidebar").style.width="300px";
    button.onclick = closeNav
}

function closeNav(){
    document.getElementById("sidebar").style.width="0";
    button.onclick = openNav
}
time = document.getElementById("time")
nameBox = document.getElementById("name")
name = localStorage.getItem("name")
nameBox.innerHTML = name
now = new Date().getHours();
if (now >= 0 && now <= 11){
    time.innerHTML = "morning"
}
else if (now >=12 && now <= 18){
    time.innerHTML = "afternoon"
}
else {
    time.innerHTML = "evening"
}

function pushStretchR(id){
    r2 = document.getElementById("testFirebaseInput").value
    email = localStorage.getItem("user")
    user = email.replaceAll(".","").replaceAll("#","").replaceAll("$",'').replaceAll("[","").replaceAll("]","")
    user = user.substring(0,user.indexOf("@"))
    if (id === 1){
        database.ref(user + '/stetches').set({'butterfly':r2}).then((snapshot)=>{})
    } else if (id == 2){
        database.ref(user + '/stetches').set({'camel':r2}).then((snapshot)=>{})
    } else if (id == 3){
        database.ref(user + '/stetches').set({'crescent':r2}).then((snapshot)=>{})
    } else if (id == 4){
        database.ref(user + '/stetches').set({'easy':r2}).then((snapshot)=>{})
    } else if (id == 5){
        database.ref(user + '/stetches').set({'triangle':r2}).then((snapshot)=>{})
    } else if (id == 6){
        database.ref(user + '/stetches').set({'reverseWarrior':r2}).then((snapshot)=>{})
    } else if (id == 7){
        database.ref(user + '/stetches').set({'tree':r2}).then((snapshot)=>{})
    } else if (id == 8){
        database.ref(user + '/stetches').set({'warrior1':r2}).then((snapshot)=>{})
    } else if (id == 9){
        database.ref(user + '/stetches').set({'warrior2':r2}).then((snapshot)=>{})
    } else if (id == 10){
        database.ref(user + '/stetches').set({'warrior3':r2}).then((snapshot)=>{})
    }
}

function pushCustomized(names){
    r2 = document.getElementById("testFirebaseInput").value
    email = localStorage.getItem("user")
    user = email.replaceAll(".","").replaceAll("#","").replaceAll("$",'').replaceAll("[","").replaceAll("]","")
    user = user.substring(0,user.indexOf("@"))

    // UNFINISHED
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

        if (current.length >= 20) {
            alert("Your custom workout plan has more than 20 planned stretches! This might tire you out! Try hitting the 'clear list' button to remake your custom plan!")
        }
        else {
            current.push(name)

            for (let i = 0; i < current.length; i++){
                str += (i + 1) + ". " + current[i] + "</br>";
            }
            
            database.ref(user + '/custom').set({array:current}).then((snapshot)=>{})
            document.getElementById("list").innerHTML = str;
        }
        
    })
}

function clearCustom(){
    email = localStorage.getItem("user")
    user = email.replaceAll(".","").replaceAll("#","").replaceAll("$",'').replaceAll("[","").replaceAll("]","")
    user = user.substring(0,user.indexOf("@"))
    database.ref(user + '/custom').set({array:[]}).then((snapshot)=>{})
    document.getElementById("list").innerHTML = "Currently empty";
}

function loadList(){
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

        for (let i = 0; i < current.length; i++){
            str += (i + 1) + ". " + current[i] + "</br>";
        }

        if (str == ""){
            str = "Currently empty"
        }

        document.getElementById("list").innerHTML = str;
    })
}

