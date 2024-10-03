const toggleButton=document.getElementById('toggle-button') as HTMLButtonElement
const skills = document.getElementById('Skills') as HTMLDivElement

toggleButton.addEventListener('click', () => {
    if(skills.style.display === 'none'){
        skills.style.display = 'block';
        toggleButton.innerHTML = "Hide Skills";
    } else {
        skills.style.display = 'none';
        toggleButton.innerHTML = "Show Skills";
    }
}); 