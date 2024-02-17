button = document.getElementById("openSidebar")
function openNav(){
    document.getElementById("sidebar").style.width="250px";
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