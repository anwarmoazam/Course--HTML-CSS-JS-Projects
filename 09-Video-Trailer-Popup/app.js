const watchBtn = document.querySelector('.btn');
const closeBtn = document.querySelector('.close-icon');
const videoDOM = document.querySelector('.video-container');
const video = document.querySelector('video')

watchBtn.addEventListener('click',videoPlay);
closeBtn.addEventListener('click',videoClose);

function videoPlay(){
    videoDOM.classList.remove('active');
}

function videoClose(){
    videoDOM.classList.add('active');
    video.pause();
    video.currentTime = 0
}