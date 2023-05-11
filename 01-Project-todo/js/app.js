// Selectors
const toDoInput = document.querySelector('.todo-input');
const toDoBtn = document.querySelector('.todo-button');
const toDoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

// Event Listeners
toDoBtn.addEventListener('click', addToDo);
toDoList.addEventListener('click', deleteAndCompletedToDo);
filterOption.addEventListener('click', filterToDo);
document.addEventListener('DOMContentLoaded', getToDoFromLocalStorage);

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
    let todos = JSON.parse(localStorage.getItem('todo'));
    const item = e.target;
    if (item.classList[0] === 'trash-btn') {
        item.parentElement.classList.add('fall');
        item.parentElement.addEventListener('transitionend', function () {
            if (todos.includes(e.target.parentElement.childNodes[0].innerText)) {
                let index = todos.indexOf(e.target.parentElement.childNodes[0].innerText)
                todos.splice(index, 1);
                localStorage.setItem('todo', JSON.stringify(todos));
            }
            item.parentElement.remove()
        })
    }

    if (item.classList[0] === 'complete-btn') {
        item.parentElement.classList.toggle('completed');
        let value = e.target.parentElement.children[0].innerText;
        if (item.parentElement.classList.contains('completed')) {
            for (let todo in todos) {
                if (todos[todo].value === value) {
                    todos[todo].done = true;
                }
            }
        } else{
            for (let todo in todos) {
                if (todos[todo].value === value) {
                    todos[todo].done = false;
                }
            }
        }
        localStorage.clear();
        localStorage.setItem('todo', JSON.stringify(todos));
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
        }
    })
}

function saveToLocalStorage(value) {
    let todo;
    if (localStorage.getItem('todo') === null) {
        todo = [{ value, done: false }];
    } else {
        todo = JSON.parse(localStorage.getItem('todo'));
        todo.push({ value, done: false });
    }
    localStorage.setItem('todo', JSON.stringify(todo));
}

function getToDoFromLocalStorage() {
    if (localStorage.getItem('todo')) {
        let todos = JSON.parse(localStorage.getItem('todo'));
        todos.forEach(function (todo) {
            if (todo.done === true) {
                const toDoDiv = document.createElement('div');
                toDoDiv.classList.add('todo');
                toDoDiv.classList.add('completed');
                const newToDo = document.createElement('li');
                newToDo.innerText = todo.value;
                newToDo.classList.add('todo-item');
                toDoDiv.appendChild(newToDo);
                const completedBtn = document.createElement('button');
                completedBtn.innerHTML = `<i class="fas fa-check"></i>`;
                completedBtn.classList.add('complete-btn');
                toDoDiv.appendChild(completedBtn);
                const trashBtn = document.createElement('button');
                trashBtn.innerHTML = `<i class="fas fa-trash"></i>`;
                trashBtn.classList.add('trash-btn');
                toDoDiv.appendChild(trashBtn);
                toDoList.appendChild(toDoDiv);
            } else {
                const toDoDiv = document.createElement('div');
                toDoDiv.classList.add('todo');
                const newToDo = document.createElement('li');
                newToDo.innerText = todo.value;
                newToDo.classList.add('todo-item');
                toDoDiv.appendChild(newToDo);
                const completedBtn = document.createElement('button');
                completedBtn.innerHTML = `<i class="fas fa-check"></i>`;
                completedBtn.classList.add('complete-btn');
                toDoDiv.appendChild(completedBtn);
                const trashBtn = document.createElement('button');
                trashBtn.innerHTML = `<i class="fas fa-trash"></i>`;
                trashBtn.classList.add('trash-btn');
                toDoDiv.appendChild(trashBtn);
                toDoList.appendChild(toDoDiv);
            }
        })
    }
}
