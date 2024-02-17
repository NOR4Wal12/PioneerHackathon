let video;
let podeNet;
let pose;
const closeText = document.getElementById("tooCloseText")
const confidence = document.getElementById("confidence")
dotSize = 20

function setup() {
    createCanvas(680, 480);
    video = createCapture(VIDEO)
    video.hide()
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
  }

function gotPoses(poses){
    console.log(poses)
    if (poses.length > 0){
        pose = poses[0].pose;
        confidence.innerHTML = pose.score
    }
}

function modelLoaded(){
    console.log("I love men I love men I love men I love men")
}


cameraOn = 1;
const button = document.getElementById("changeButton")
  button.onclick = (event) => {
    event.preventDefault()
    cameraOn *= -1
    window.alert("pressed")
  }

closeText.style.display="flex"

  function draw() {
    if (cameraOn == 1){
        background(220);
        image(video, 0, 0)
        if (pose) {
            fill(255,0,0)
            ellipse(pose.nose.x, pose.nose.y, dotSize)
            ellipse(pose.rightWrist.x, pose.rightWrist.y, dotSize)
            ellipse(pose.leftWrist.x, pose.leftWrist.y, dotSize)
            ellipse(pose.rightShoulder.x, pose.rightShoulder.y, dotSize)
            ellipse(pose.leftShoulder.x, pose.leftShoulder.y, dotSize)
            ellipse(pose.rightKnee.x, pose.rightKnee.y, dotSize)
            ellipse(pose.leftKnee.x, pose.leftKnee.y, dotSize)
        } else{
            fill(0,255,0)
            ellipse(340, 240, 64)
        }
    } else{
        background(220);
    }
    
  }