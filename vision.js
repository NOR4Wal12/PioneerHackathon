let video;
let podeNet;

function setup() {
    createCanvas(680, 480);
    video = createCapture(VIDEO)
    video.hide()
    poseNet = ml5.poseNet(video, modelLoaded)
  }

function modelLoaded(){
    console.log("loadedChips")
}


cameraOn = 1;
const button = document.getElementById("changeButton")
  button.onclick = (event) => {
    event.preventDefault()
    cameraOn *= -1
    console.log("pressed")
    window.alert("pressed")
  } 

  function draw() {
    if (cameraOn == 1){
        background(220);
        image(video, 0, 0)
    }
    
  }