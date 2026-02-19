// ============================================
// SELECTING HTML ELEMENTS
// ============================================
const form = document.querySelector('.input-field');       // The form
const taskInput = document.getElementById('task-input');   // The text input
const taskList = document.querySelector('.task-list');     // The <ul> list

// ============================================
// 1. ADD A TASK
// ============================================
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Stops the page from refreshing on submit

    const taskText = taskInput.value.trim(); // Get input text (remove extra spaces)

    if (taskText === '') return; // Don't add empty tasks

    addTask(taskText);         // Call the function to build the task
    taskInput.value = '';      // Clear the input field after adding
});

function addTask(text) {
    // Create a new <li> element
    const li = document.createElement('li');

    // Inner HTML: task text + edit/complete/delete buttons
    li.innerHTML = `
        <span>${text}</span>
        <div class="actions">
            <button class="complete-btn" title="Complete"><i class="fa-solid fa-check"></i></button>
            <button class="edit-btn" title="Edit"><i class="fa-solid fa-pen"></i></button>
            <button class="delete-btn" title="Delete"><i class="fa-solid fa-trash"></i></button>
        </div>
    `;

    taskList.appendChild(li); // Add the new task to the list
}

// ============================================
// 2. DELETE, COMPLETE & EDIT — using delegation
// (We listen on the list, not each button)
// ============================================
taskList.addEventListener('click', function(e) {

    // Find which <li> was clicked inside
    const clickedLi = e.target.closest('li');
    if (!clickedLi) return; // Safety check

    // ---- DELETE ----
    if (e.target.closest('.delete-btn')) {
        clickedLi.remove(); // Remove the whole <li> from the DOM
    }

    // ---- CHECK / COMPLETE ----
    else if (e.target.closest('.complete-btn')) {
        clickedLi.classList.toggle('completed'); // Toggle the strikethrough style
    }

    // ---- EDIT / CHANGE ----
    else if (e.target.closest('.edit-btn')) {
        const span = clickedLi.querySelector('span'); // Get the task text element
        const currentText = span.textContent;         // Save current text

        // Ask the user for new text (pre-filled with current text)
        const newText = prompt('Edit your task:', currentText);

        // Only update if user typed something and didn't cancel
        if (newText !== null && newText.trim() !== '') {
            span.textContent = newText.trim(); // Update the displayed text
        }
    }
});