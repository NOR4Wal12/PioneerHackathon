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

function checkDots(pose){
    allGood = true;
    Lespos = [pose.nose.confidence, pose.rightHip.confidence, pose.leftHip.confidence, 
          pose.rightWrist.confidence, pose.leftWrist.confidence, pose.rightShoulder.confidence, 
          pose.leftShoulder.confidence, pose.rightKnee.confidence, pose.leftKnee.confidence, 
          pose.rightAnkle.confidence, pose.leftAnkle.confidence]
    for (let i = 0; i<Lespos.length; i++){
        if (Lespos[i] < 0.3){
            closeText.innerHTML = "Please make sure your entire body is in frame"
            allGood = false;
            break
        }
    }
    if (allGood == true){
        closeText.innerHTML = ""
    }
}

function gotPoses(poses){
    console.log(poses)
    if (poses.length > 0){
        pose = poses[0].pose;
        confidence.innerHTML = pose.score
        checkDots(pose)
    } else{
        confidence.innerHTML = "Please enter frame"
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
            ellipse((pose.rightHip.x + pose.leftHip.x)/2, (pose.rightHip.y + pose.leftHip.y)/2, dotSize)
            
            ellipse(pose.rightWrist.x, pose.rightWrist.y, dotSize)
            ellipse(pose.leftWrist.x, pose.leftWrist.y, dotSize)
            
            ellipse(pose.rightShoulder.x, pose.rightShoulder.y, dotSize)
            ellipse(pose.leftShoulder.x, pose.leftShoulder.y, dotSize)
            
            ellipse(pose.rightKnee.x, pose.rightKnee.y, dotSize)
            ellipse(pose.leftKnee.x, pose.leftKnee.y, dotSize)
            
            ellipse(pose.rightAnkle.x, pose.rightAnkle.y, dotSize)
            ellipse(pose.leftAnkle.x, pose.leftAnkle.y, dotSize)

            ellipse(pose.rightHip.x, pose.rightHip.y, dotSize)
            ellipse(pose.leftHip.x, pose.leftHip.y, dotSize)
        } 
    } else{
        background(220);
    }
    
  }