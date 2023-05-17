const questionDOM = document.getElementById('question');
const buttonDOM = document.querySelector('.btn');
const scoreDOM = document.getElementById('score');
const answerDOM = document.getElementById('answer');

// let score = 0;
let num1 = Math.ceil(Math.random()*10);
let num2 = Math.ceil(Math.random()*10);
questionDOM.innerText = `What is ${num1} multiply by ${num2}?`;
let answer = num1 * num2;

let score = JSON.parse(localStorage.getItem('score'));

if(!score){
    score = 0;
}
scoreDOM.innerText = `score : ${score}`;

buttonDOM.addEventListener('click',checkAnswer);

function checkAnswer(e){
    e.preventDefault();
    let inputAnswer = Number(answerDOM.value);
    if(answer === inputAnswer){
        score++;
        localStorage.setItem('score',JSON.stringify(score));
        scoreDOM.innerText = `score : ${score}`;
    } else{
        score--;
        localStorage.setItem('score',JSON.stringify(score));
        scoreDOM.innerText = `score : ${score}`;
    }
    answerDOM.value = "";    
    generateQuestion();
}

function generateQuestion(){
    num1 = Math.ceil(Math.random()*10);
    num2 = Math.ceil(Math.random()*10);
    questionDOM.innerText = `What is ${num1} multiply by ${num2}?`;
    answer = num1 * num2;    
    // return answer;
}