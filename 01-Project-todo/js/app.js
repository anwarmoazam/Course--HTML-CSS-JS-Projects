// Selectors
const toDoInput = document.querySelector('.todo-input');
const toDoBtn = document.querySelector('.todo-button');
const toDoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

// Event Listeners
toDoBtn.addEventListener('click', addToDo);
toDoList.addEventListener('click', deleteAndCompletedToDo);
filterOption.addEventListener('click', filterToDo);

// Functions
function addToDo(e) {
    e.preventDefault();
    const toDoDiv = document.createElement('div');
    toDoDiv.classList.add('todo');
    const newToDo = document.createElement('li');
    newToDo.innerText = toDoInput.value;
    newToDo.classList.add('todo-item');
    toDoDiv.appendChild(newToDo);
    saveToLocalStorage(toDoInput.value);
    const completedBtn = document.createElement('button');
    completedBtn.innerHTML = `<i class="fas fa-check"></i>`;
    completedBtn.classList.add('complete-btn');
    toDoDiv.appendChild(completedBtn);
    const trashBtn = document.createElement('button');
    trashBtn.innerHTML = `<i class="fas fa-trash"></i>`;
    trashBtn.classList.add('trash-btn');
    toDoDiv.appendChild(trashBtn);
    toDoList.appendChild(toDoDiv);
    toDoInput.value = "";
}

function deleteAndCompletedToDo(e) {
    const item = e.target;
    if (item.classList[0] === 'trash-btn') {
        item.parentElement.classList.add('fall');
        item.parentElement.addEventListener('transitionend', function () {
            item.parentElement.remove()
        })
    }

    if (item.classList[0] === 'complete-btn') {
        item.parentElement.classList.toggle('completed');
    }
}

function filterToDo(e) {
    toDoList.childNodes.forEach(function (todo) {
        switch (e.target.value) {
            case "all":
                todo.style.display = 'flex';
                break;

            case "completed":
                if (todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;

            case "uncompleted":
                if (!todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;


            default:
                break;
        }
    })
}

function saveToLocalStorage(value){
    let todo;
    if(localStorage.getItem('todo') === null){
        todo = [];
    } else{
        todo = JSON.parse(localStorage.getItem('todo'));
        todo.push(value);
    }
    localStorage.setItem('todo',JSON.stringify(todo));
}