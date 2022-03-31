let btn = document.querySelector("#help");
let helpDiv = document.querySelector("#boxHelp");

btn.addEventListener('click', () => {
    if (helpDiv.style.display === 'none') {
        helpDiv.style.display = 'block';
    } 
    else {
        helpDiv.style.display = 'none';
    }
});