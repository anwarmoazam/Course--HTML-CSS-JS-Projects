const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const imageContainer = document.querySelector('.image-container');
const imgs = document.querySelectorAll('img');

console.log(imgs);

let currentImg = 1;
let timeout;

nextBtn.addEventListener('click', function () {
    currentImg++;
    clearTimeout(timeout);
    updateImg();
})

previousBtn.addEventListener('click', function () {
    currentImg--;
    clearTimeout(timeout);
    updateImg();
})

function updateImg() {
    if (currentImg > imgs.length) {
        currentImg = 1;
    } else if (currentImg < 1) {
        currentImg = imgs.length;
    }
    imageContainer.style.transform = `translateX(-${(currentImg - 1) * 500}px)`;
    timeout = setTimeout(()=>{
        currentImg++;
        updateImg();
    },5000)
    console.log(timeout);
}


updateImg();