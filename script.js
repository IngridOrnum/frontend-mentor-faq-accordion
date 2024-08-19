
function openDropdown () {
    document.getElementById('answer-dropdown').style.display = 'block';
    document.getElementById('min-icon').style.display = 'block';
    document.getElementById('+plus-icon').style.display = 'none';
}

function closeDropdown () {
    document.getElementById('answer-dropdown').style.display = 'none';
    document.getElementById('min-icon').style.display = 'none';
    document.getElementById('+plus-icon').style.display = 'block';
}