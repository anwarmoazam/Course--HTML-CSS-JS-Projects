const numberOfrandomColorBox = document.getElementById('randomColorBox');
const submitBtn = document.querySelector('.submit');
const container = document.querySelector('.container');

submitBtn.addEventListener('click',generateRandomBox);

function generateRandomBox(e){
    container.innerText = "";
    e.preventDefault();
    let numberBox = Number(numberOfrandomColorBox.value);
    for(let i=0; i<numberBox; i++){
        let box = document.createElement('div');
        let color = generateRandomColor();
        box.classList.add('color-container');
        box.style.width = `300px`;
        box.style.height = `150px`;
        box.style.backgroundColor = color;
        box.style.border = `2px solid black`;
        box.style.margin = `10px`;
        box.style.borderRadius = `10px`;
        box.innerText = color;
        container.appendChild(box);
    }
    numberOfrandomColorBox.value = "";
}

function generateRandomColor(){
    let numbers = '0123456789ABCDEF'
    let color = "#";
    for(let i=0; i<6; i++){
        color += numbers[Math.floor(Math.random()*numbers.length)];
    }
    return color;
}
