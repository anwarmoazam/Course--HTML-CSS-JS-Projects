const backgroundImage = document.getElementById('bg-image');
const containerDOM = document.querySelector('.container');

window.addEventListener('scroll',function(event){
    console.log(`${pageYOffset}%`)
    // backgroundImage.style.backgroundSize = `${pageYOffset}%`;

})