button = document.getElementById("openSidebar")
function openNav(){
    document.getElementById("sidebar").style.width="350px";
    button.onclick = closeNav
}


function closeNav(){
    document.getElementById("sidebar").style.width="0";
    button.onclick = openNav
}
