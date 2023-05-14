const navBarDOM = document.querySelector('.navbar');
const bottomContainerDOM = document.querySelector('.bottom-container');

window.addEventListener('scroll',(e)=>{
    if(window.scrollY > bottomContainerDOM.offsetTop - navBarDOM.offsetHeight -50){
        navBarDOM.classList.add('active');
    }else{
        navBarDOM.classList.remove('active');
    }
})