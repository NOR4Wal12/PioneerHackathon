let video;
let podeNet;
let pose;

function setup() {
    createCanvas(680, 480);
    video = createCapture(VIDEO)
    video.hide()
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on(pose, gotPoses)
  }

function gotPoses(poses){
    console.log(poses)
    if (postMessage.length > 0){
        pose = poses[0].pose;

    }
}

function modelLoaded(){
    console.log("loadedChips")
}


cameraOn = 1;
const button = document.getElementById("changeButton")
  button.onclick = (event) => {
    event.preventDefault()
    cameraOn *= -1
    window.alert("pressed")
  } 

  function draw() {
    if (cameraOn == 1){
        background(220);
        image(video, 0, 0)
        if (pose) {
            fill(255,0,0)
            ellipse(pose.nose.x, pose.nose.y, 64)
        } else{
            fill(0,255,0)
            ellipse(340, 240, 64)
        }
    } else{
        background(220);
    }
    
  }