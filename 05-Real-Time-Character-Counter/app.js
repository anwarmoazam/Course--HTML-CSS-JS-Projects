const textareaDOM = document.getElementById('textarea');
const totalCounterDOM = document.getElementById('total-counter');
const remaingCounterDOM = document.getElementById('remaining-counter');

remaingCounterDOM.innerText = textareaDOM.getAttribute('maxlength');

totalCounterDOM.innerText = textareaDOM.value.length;

textareaDOM.addEventListener('keyup',()=>{
    totalCounterDOM.innerText = textareaDOM.value.length;
    remaingCounterDOM.innerText = textareaDOM.getAttribute('maxlength') - textareaDOM.value.length;
})