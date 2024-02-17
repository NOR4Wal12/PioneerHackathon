function setup() {
    createCanvas(680, 480);
    video = createCapture(VIDEO)
    video.hide()
  }
cameraOn = 1;
const button = document.getElementById("changeButton")
  button.onclick = (event) => {
    event.preventDefault()
    cameraOn *= -1
    wind
  } 

  function draw() {
    if (cameraOn == 1){
        background(220);
        image(video, 0, 0)
    }
    
  }