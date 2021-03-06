let helpBtn = document.querySelector("#help");
let helpDiv = document.querySelector("#boxHelp");

let statsBtn = document.querySelector("#stats");
let statsDiv = document.querySelector("#boxStats");

let settingsBtn = document.querySelector("#settings");
let settingsDiv = document.querySelector("#boxSettings");

let icon = document.querySelector(".fa-play")
let wrapper = document.querySelector("#swapIcon");
let player = document.querySelector(".player");

let navBorder = document.getElementById("navBorder");

/*
const animationOut = [
    {
        transform: 'translateY(0%)'
    },
    {
        transform: 'translateY(+100%)'
    }
];
const animationOutTiming = {
    duration: 3000,
}
*/

helpBtn.addEventListener('click', () => {
    if (helpDiv.style.display === 'none') {
        helpDiv.style.display = 'block';
    }
});
window.addEventListener('mouseup', function (event) {
    if (event.target !== helpDiv && event.target.parentNode !== helpDiv) {
        helpDiv.style.display = 'none';
    }
});

statsBtn.addEventListener('click', () => {
    if (statsDiv.style.display === 'none') {
        statsDiv.style.display = 'block';
    }
});
window.addEventListener('mouseup', function (event) {
    if (event.target !== statsDiv && event.target.parentNode !== statsDiv) {
        statsDiv.style.display = 'none';
    }
});

settingsBtn.addEventListener('click', () => {
    if (settingsDiv.style.display === 'none') {
        settingsDiv.style.display = 'block';
    }
});
window.addEventListener('mouseup', function (event) {
    if (event.target !== settingsDiv && event.target.parentNode !== settingsDiv) {
        settingsDiv.style.display = 'none';
    }
});

function changeTheme () {
    bodyTag.style.backgroundColor = "#3f1512";
    navBorder.style.borderColor = "#daaf0c";
}
