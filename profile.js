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

        for (let i = 0; i < current.length; i++){
            str += (i + 1) + ". " + toDisplay(current[i]) + "</br>";
        }

        if (str == ""){
            str = "None currently planned!"
        }

        document.getElementById("list").innerHTML = str;
    })
}
