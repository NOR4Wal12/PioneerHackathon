function previewVideo(poseName, videoFile, title, description) {
    const videoContainer = document.getElementById('videoContainer');
    videoContainer.innerHTML = `<img src="${videoFile}"></img>`;
    
    const poseTitle = document.getElementById('poseTitle');
    const poseDescription = document.getElementById('poseDescription');
    
    poseTitle.textContent = title;
    poseDescription.textContent = description;
}

function workout(poseName) {
    sessionStorage.setItem('workout', poseName);
    window.location.href = 'vision.html';
}
