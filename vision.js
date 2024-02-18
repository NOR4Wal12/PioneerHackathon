let video;
let poseNet;
let pose;
const closeText = document.getElementById("tooCloseText")
const confidence = document.getElementById("confidence")
const timer = document.getElementById("timer")
const currentStretch = document.getElementById("currentStretch")
const nextStretch = document.getElementById("nextStretch")
const accuracy = document.getElementById("accuracy")
const rleg = document.getElementById("rleg")
const lleg = document.getElementById("lleg")
const hip = document.getElementById("hip")
const rarm = document.getElementById("rarm")
const larm = document.getElementById("larm")

cameraOn = 1
dotSize = 20
//myWorkouts = sessionStorage.getItem("workout")
myWorkouts = ["butterfly", "dave", "Ben", "Jeff"]
time = 30

currentStretch.innerHTML = myWorkouts[0]
if (myWorkouts.length > 1){
    nextStretch.innerHTML = myWorkouts[1]
} else{
    nextStretch.innerHTML = ""
}

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
        if (Lespos[i] < 0.2){
            closeText.innerHTML = "Please make sure your entire body is in frame"
            allGood = false;
            break
        }
    }
    if (allGood == true){
        closeText.innerHTML = "Lets start streching!"
    }
}

function gotPoses(poses){
    console.log(poses)
    if (poses.length > 0){
        pose = poses[0].pose;
        confidence.innerHTML = pose.score
        checkDots(pose)
        rarm.innerHTML = "right arm: " + getAngle(pose.rightWrist.x, pose.rightWrist.y, 
            pose.rightShoulder.x, pose.rightShoulder.y, 
            pose.rightHip.x, pose.rightHip.y)
        larm.innerHTML = "left arm: " + getAngle(pose.leftWrist.x, pose.leftWrist.y, 
            pose.leftShoulder.x, pose.leftShoulder.y, 
            pose.leftHip.x, pose.leftHip.y)
        rleg.innerHTML = "right leg: " + getAngle(pose.rightHip.x, pose.rightHip.y, 
            pose.rightKnee.x, pose.rightKnee.y, 
            pose.rightAnkle.x, pose.rightAnkle.y)
        lleg.innerHTML = "left leg: " + getAngle(pose.leftHip.x, pose.leftHip.y, 
            pose.leftKnee.x, pose.leftKnee.y, 
            pose.leftAnkle.x, pose.leftAnkle.y)
        hip.innerHTML = "hip: " + getAngle(pose.leftKnee.x, pose.leftKnee.y,
            pose.leftHip.x, pose.leftHip.y, 
            pose.leftShoulder.x, pose.leftShoulder.y)
        time -= 0.2
        timer.innerHTML = "Time Remaining: " + Math.round(time)
        if (time <= 0.2){
            myWorkouts.shift(1)
            time=15
            if (myWorkouts.length == 0){
                window.location.href = "index.html"
            } 
            else{
                currentStretch.innerHTML = myWorkouts[0]
                if (myWorkouts.length > 1){
                    nextStretch.innerHTML = myWorkouts[1]
                } else{
                    nextStretch.innerHTML = ""
                }
                //stretchesLeft.innerHTML = myWorkouts.length
            }
        }
    } else{
        confidence.innerHTML = "\n"
        closeText.innerHTML = "Please Enter Frame"
    }
}

function modelLoaded(){
    console.log("I love men I love men I love men I love men")
}


const button = document.getElementById("changeButton")
  button.onclick = (event) => {
    event.preventDefault()
    cameraOn *= -1
    window.alert("pressed")
    
  }

function getAngle(Ax, Ay, Bx, By, Cx, Cy){
    b=Math.sqrt((Ax - Bx)**2 + (Ay - By)**2)
    a=Math.sqrt((Cx - Bx)**2 + (Cy - By)**2)
    c=Math.sqrt((Ax - Cx)**2 + (Ay - Cy)**2)
    return 57.3 * Math.acos((a**2 + b**2 - c**2) / (2 * a * b))
}

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
    } 
    
  }
