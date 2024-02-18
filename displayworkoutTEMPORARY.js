let selectedWorkout = sessionStorage.getItem("selectedWorkout");

function selectWorkout(poseName) {
    sessionStorage.setItem('workout', poseName);
    window.location.href = 'vision.html';
}
