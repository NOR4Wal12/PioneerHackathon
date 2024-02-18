function previewVideo(poseName, videoFile) {
    const videoContainer = document.getElementById('videoContainer');
    videoContainer.innerHTML = `<video src="${videoFile}" autoplay muted loop></video>`;
    
    const video = videoContainer.querySelector('video');
    video.play();
}

function selectWorkout(poseName) {
    sessionStorage.setItem('selectedWorkout', poseName);
    window.location.href = 'displayworkout.html';
}
