const form = document.querySelector('.input-field');
const taskInput = document.getElementById('task-input');  
const taskList = document.querySelector('.task-list');     

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const taskText = taskInput.value.trim(); 

    if (taskText === '') return;

    addTask(taskText);         
    taskInput.value = '';      
});

function addTask(text) {
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${text}</span>
        <div class="actions">
            <button class="complete-btn" title="Complete"><i class="fa-solid fa-check"></i></button>
            <button class="edit-btn" title="Edit"><i class="fa-solid fa-pen"></i></button>
            <button class="delete-btn" title="Delete"><i class="fa-solid fa-trash"></i></button>
        </div>
    `;
    taskList.appendChild(li); 
}

taskList.addEventListener('click', function(e) {
    const clickedLi = e.target.closest('li');
    if (!clickedLi) return; // Safety check

    if (e.target.closest('.delete-btn')) {
        clickedLi.remove();
    }

    else if (e.target.closest('.complete-btn')) {
        clickedLi.classList.toggle('completed'); 
    }

    else if (e.target.closest('.edit-btn')) {
        const span = clickedLi.querySelector('span');
        const currentText = span.textContent;

        const newText = prompt('Edit your task:', currentText);

        if (newText !== null && newText.trim() !== '') {
            span.textContent = newText.trim(); 
        }
    }
});
