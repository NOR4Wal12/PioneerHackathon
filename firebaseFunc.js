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
        current.push(name)

        for (let i = 0; i < current.length; i++){
            str += (i + 1) + ". " + current[i];
        }
        
        database.ref(user + '/custom').set({array:current}).then((snapshot)=>{})
        document.getElementById("list").innerHTML = str;
    })
}

function clearCustom(){
    email = localStorage.getItem("user")
    user = email.replaceAll(".","").replaceAll("#","").replaceAll("$",'').replaceAll("[","").replaceAll("]","")
    user = user.substring(0,user.indexOf("@"))
    database.ref(user + '/custom').set({array:[]}).then((snapshot)=>{})
}


// function loadTextFromDatabase(){
//     var dbRef = firebase.database().ref().child("messagesAndNames");
//     var str = "";
    
//     dbRef.once('value',(snapshot)=>{
//         snapshot.forEach(function(data){
//             str = "\t" + data.val().message + "<br/>" + str;
           
//             str = data.val().name + ":<br/>" + str;
//         });
        
//         document.getElementById("messageInput").innerHTML = str;
//     });
// }

