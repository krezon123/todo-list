



const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const newTask = todoInput.value;

    if (newTask === '') {
        alert('Поле пустоею');
        return;
    }
    todoInput.value = '';
    addTask(newTask);
});

function addTask(task) {
    const listItem = document.createElement('li');
    const taskText = document.createElement('span');
    taskText.textContent = task;
    listItem.appendChild(taskText);

    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    listItem.appendChild(checkBox);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Удалить';
    listItem.appendChild(deleteButton);

    todoList.appendChild(listItem);


    checkBox.addEventListener('change', function() {
        if (this.checked) {
        taskText.style.textDecoration = 'line-through';
        } 
        else {
        taskText.style.textDecoration = 'none';
        }
    });
 
    deleteButton.addEventListener('click', function() {
        todoList.removeChild(listItem);
    });
}