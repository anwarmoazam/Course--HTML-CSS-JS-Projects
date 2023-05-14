const bodyDOM = document.querySelector('body');

bodyDOM.addEventListener('mousemove',(event)=>{
    const xPos = event.offsetX;
    const yPos = event.offsetY;
    // console.log('xPos : ',xPos,'yPos : ',yPos);
    const spanDOM = document.createElement('span');
    spanDOM.style.left = `${xPos}px`;
    spanDOM.style.top = `${yPos}px`;
    const size = Math.random()*100;
    spanDOM.style.width = `${size}px`;
    spanDOM.style.height = `${size}px`;

    bodyDOM.appendChild(spanDOM);
    setTimeout(()=>{
        spanDOM.remove()
    },3000)
})