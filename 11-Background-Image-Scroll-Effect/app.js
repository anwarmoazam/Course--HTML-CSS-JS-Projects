const backgroundImage = document.getElementById('bg-image');
const containerDOM = document.querySelector('.container');

window.addEventListener('scroll',function(){
    let yPosition = window.pageYOffset;
    backgroundImage.style.opacity = 1-(yPosition/1000);
    backgroundImage.style.backgroundSize = `${160-(yPosition/12)}%`
})