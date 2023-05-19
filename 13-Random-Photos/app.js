const imageContainerDOM = document.querySelector('.image-container');
const btnDOM = document.querySelector('.btn');
let imageNum = 5;

btnDOM.addEventListener('click',addNewImages);

function addNewImages(){
    for(let i=0; i<imageNum; i++){
        const newImage = document.createElement('img');
        newImage.src = `https://picsum.photos/300?random=${Math.ceil(Math.random()*2000)}`;
        imageContainerDOM.appendChild(newImage);
    }
}