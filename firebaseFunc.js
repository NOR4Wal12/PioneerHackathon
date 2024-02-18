function pushStretchR(id, r2){
    email = localStorage.getItem("user")
    user = email.replaceAll(".","").replaceAll("#","").replaceAll("$",'').replaceAll("[","").replaceAll("]","")
    user = user.substring(0,user.indexOf("@"))
    data={
        id: id,
        value: r2
    }
    firebase.database().ref(user+'/stretches').push(data)
    // if (id == "butterfly"){
        
    //     database.ref(user + '/stretches').push({'butterfly':r2}).then((snapshot)=>{})
    // } else if (id == "downwarddog"){
    //     database.ref(user + '/stretches').push({'downwarddog':r2}).then((snapshot)=>{})
    // } else if (id == "crescent"){
    //     database.ref(user + '/stretches').push({'crescent':r2}).then((snapshot)=>{})
    // } else if (id == "easy"){
    //     database.ref(user + '/stretches').push({'easy':r2}).then((snapshot)=>{})
    // } else if (id == "triangle"){
    //     database.ref(user + '/stretches').push({'triangle':r2}).then((snapshot)=>{})
    // } else if (id == "reversewarrior"){
    //     database.ref(user + '/stretches').push({'reversewarrior':r2}).then((snapshot)=>{})
    // } else if (id == "tree"){
    //     database.ref(user + '/stretches').push({'tree':r2}).then((snapshot)=>{})
    // } else if (id == "warrior1"){
    //     database.ref(user + '/stretches').push({'warrior1':r2}).then((snapshot)=>{})
    // } else if (id == "warrior2"){
    //     database.ref(user + '/stretches').push({'warrior2':r2}).then((snapshot)=>{})
    // } else if (id == "warrior3"){
    //     database.ref(user + '/stretches').push({'warrior3':r2}).then((snapshot)=>{})
    // }
}

function pullStretch(){
    email = localStorage.getItem("user")
    user = email.replaceAll(".","").replaceAll("#","").replaceAll("$",'').replaceAll("[","").replaceAll("]","")
    user = user.substring(0,user.indexOf("@"))

    const stretchesRef = firebase.database().ref(user+"/stretches");
    info = []

    stretchesRef.get().then((snapshot) => {
        if (snapshot.exists()) {
            const data = snapshot.val();
            const stretchIds = ['butterfly', 'downwarddog', 'crescent', 'easy', 'triangle', 'reversewarrior', 'tree', 'warrior1', 'warrior2', 'warrior3']; // Get all stretch IDs
            // Sort stretch IDs by descending value
            snapshot.forEach(function(data){
                info.push(data.val())
            })

            console.log(info)
            // document.getElementById('result').innerText = JSON.stringify(stretchIds);
        } else {
            console.log("No data available");
            // document.getElementById('result').innerText = "No data available";
        }
    }).catch((error) => {
        console.error("Error fetching data:", error);
        // document.getElementById('result').innerText = "Error fetching data";
    });

    console.log(info)

    for (let i = 0; i < stretchIds.length; i++){
        for (let j = 0; j < info.length; j++){
            if (info[j].id == stretchIds[i]){
                break
            }
        }
        info.push{id: stretchIds[i], value: 100}
    }

    console.log(info)

    // console.log(stretchIds)
    
    // const reference = firebase.database().ref(user);
    // const stretchIds = ['butterfly', 'downwarddog', 'crescent', 'easy', 'triangle', 'reversewarrior', 'tree', 'warrior1', 'warrior2', 'warrior3'];
    // const promises = stretchIds.map(stretchId => reference.child(`stretches/${stretchId}`).get());
    // stretchData = []
    // Promise.all(promises)
    //     .then(snapshots => {
    //         stretchData = snapshots.map(snapshot => {
    //             const value = snapshot.exists() ? snapshot.val() : 100;
    //             return { id: snapshot.key, value };
    //         });
    //         stretchData.sort((a, b) => b.value - a.value); // Sort in ascending order
    //         console.log("Stretches in ascending order:", stretchData);
    //     })
    //     .catch(error => {
    //         console.error("Error fetching data:", error);
    //     });

    // console.log(stretchData);
    
    // // Initialize variables to store highest value and IDs with highest values
    // let highestValue = Number.NEGATIVE_INFINITY;
    // let highestValueIds = [];
    
    // // Iterate through the array to find the highest value
    // for (const item of stretchData) {
    //     if (item.value > highestValue) {
    //         highestValue = item.value;
    //         highestValueIds = [item.id]; // New highest value, so reset IDs array
    //     } else if (item.value === highestValue) {
    //         highestValueIds.push(item.id); // Add ID to IDs array if it has the same highest value
    //     }
    // }
    
    // // Randomly select three IDs from the IDs array
    // const randomIds = [];
    // while (randomIds.length < 3 && highestValueIds.length > 0) {
    //     const randomIndex = Math.floor(Math.random() * highestValueIds.length);
    //     const randomId = highestValueIds.splice(randomIndex, 1)[0]; // Remove selected ID from IDs array
    //     randomIds.push(randomId);
    // }
    
    // console.log("IDs with highest values:", randomIds);

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

