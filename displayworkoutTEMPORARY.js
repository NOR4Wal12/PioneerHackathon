let selectedWorkout = sessionStorage.getItem("selectedWorkout");

function selectWorkout(poseName) {
    sessionStorage.setItem('selectedWorkout', poseName);
    window.location.href = 'displayWorkout.html';
}
