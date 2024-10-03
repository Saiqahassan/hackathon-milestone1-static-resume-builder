var toggleButton = document.getElementById('toggle-button');
var skills = document.getElementById('Skills');
toggleButton.addEventListener('click', function () {
    if (skills.style.display === 'none') {
        skills.style.display = 'block';
        toggleButton.innerHTML = "Hide Skills";
    }
    else {
        skills.style.display = 'none';
        toggleButton.innerHTML = "Show Skills";
    }
});
