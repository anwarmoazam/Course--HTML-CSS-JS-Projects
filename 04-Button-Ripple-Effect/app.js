const btnDOM = document.querySelector('.btn');

btnDOM.addEventListener('mouseover',(event)=>{
    const x = (event.pageX - btnDOM.offsetLeft);
    const y = (event.pageY - btnDOM.offsetTop);
    btnDOM.style.setProperty('--xPos',x+'px');
    btnDOM.style.setProperty('--yPos',y+'px');
})