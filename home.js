function openNav(){
    document.getElementById("sidebar").style.width="250px";
}

function closeNav(){
    document.getElementById("sidebar").style.width="0";
}
time = document.getElementById("time")
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