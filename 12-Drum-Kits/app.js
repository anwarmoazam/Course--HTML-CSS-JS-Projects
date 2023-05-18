const kits = ['crash','kick','snare','tom'];
const containerDOM = document.querySelector('.container');

kits.forEach((kit)=>{
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = kit;
    btn.style.backgroundImage = `url("./images/${kit}.png")`;
    containerDOM.appendChild(btn);
    const audioDOM = document.createElement('audio');
    audioDOM.src = `./sounds/${kit}.mp3`;
    containerDOM.appendChild(audioDOM);
    btn.addEventListener('click',()=>{
        audioDOM.play();
    })
    window.addEventListener('keydown',(event)=>{
        if(event.key === kit.slice(0,1)){
            audioDOM.play();
            btn.style.transform = 'scale(.9)';
            setTimeout(()=>{
                btn.style.transform = 'scale(1)';
            },100)
        }
    })
})

