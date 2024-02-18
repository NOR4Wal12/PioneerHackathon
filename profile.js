button = document.getElementById("openSidebar")
function openNav(){
    document.getElementById("sidebar").style.width="300px";
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