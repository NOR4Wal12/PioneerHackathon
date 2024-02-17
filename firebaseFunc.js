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

function addWorkout(name){
    r2 = document.getElementById("testFirebaseInput").value
    email = localStorage.getItem("user")
    user = email.replaceAll(".","").replaceAll("#","").replaceAll("$",'').replaceAll("[","").replaceAll("]","")
    user = user.substring(0,user.indexOf("@"))
    current = []
    database.ref(user+'/custom').once('value').then((snapshot)=>{ 
        data = snapshot.val()
        current = data
        // addressInput.value = data.address
        // cityInput.value = data.city
        // zipInput.value = data.zip
        // birthInput.value = data.birthdate
    })
    console.log(current)
    database.ref(user + '/custom').set(current.push(name)).then((snapshot)=>{})
}
