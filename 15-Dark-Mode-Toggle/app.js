const inputDOM = document.querySelector('.input');
const bodyDOM = document.querySelector('body');

inputDOM.checked = JSON.parse(localStorage.getItem('mode'));

updateBody();

function updateBody() {
    if (inputDOM.checked) {
        bodyDOM.style.backgroundColor = 'black';
    } else {
        bodyDOM.style.backgroundColor = 'white';
    }
}

inputDOM.addEventListener('input', () => {
    updateBody();
    saveModeToLocalStorage();
})

function saveModeToLocalStorage() {
    localStorage.setItem('mode', JSON.stringify(inputDOM.checked));
}