let helpBtn = document.querySelector("#help");
let helpDiv = document.querySelector("#boxHelp");

let statsBtn = document.querySelector("#stats");
let statsDiv = document.querySelector("#boxStats");


helpBtn.addEventListener('click', () => {
    if (helpDiv.style.display === 'none') {
        helpDiv.style.display = 'block';
    }
});

window.addEventListener('mouseup', function (event) {
   if (event.target !== helpDiv && event.target.parentNode !== helpDiv) {
       helpDiv.style.display = 'none'
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