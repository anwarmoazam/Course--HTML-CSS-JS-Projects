const containerDOM = document.querySelector('.container');
const popupDOM = document.querySelector('.popup-container');
const btnJoin = document.querySelector('.btn');
const closeIcon = document.querySelector('.close-icon');

btnJoin.addEventListener('click',()=>{
    containerDOM.classList.add('active');
    popupDOM.classList.remove('active');
})


closeIcon.addEventListener('click',()=>{
    popupDOM.classList.add('active');
    containerDOM.classList.remove('active');
})