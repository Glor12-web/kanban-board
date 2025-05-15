document.querySelectorAll('.add-card').forEach(button => {
    button.addEventListener('click', () => {
        const column = button.closest('.column');
        const form = column.querySelector('.add-card-form');
        form.classList.toggle('hidden');
    });
});

document.querySelectorAll('.confirm-add').forEach(button => {
    button.addEventListener('click', () => {
        const column = button.closest('.column');
        const input = column.querySelector('.new-task-input');
        const taskList = column.querySelector('.task-list');
        const emptyState = column.querySelector('.empty-state');
        const taskText = input.value.trim();

        if (taskText !== '') {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
          <h3>${taskText}</h3>
          <p>New task added</p>
          <div class="card-footer">
            <div class="avatar">U</div>
            <div class="icons">
              <span class="edit">Edit</span>
              <span class="delete">Delete</span>
            </div>
          </div>
        `;
            taskList.appendChild(card);
            input.value = '';
            if (emptyState) emptyState.style.display = 'none';
        }
    });



});

// Event delegation for delete buttons with confirmation
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('delete')) {
        const card = e.target.closest('.card');
        const taskList = card.parentElement;

        const confirmed = confirm("Are you sure you want to delete this task?");
        if (confirmed) {
            card.remove();

            // Show empty state if no tasks left
            if (taskList.querySelectorAll('.card').length === 0) {
                const emptyState = document.createElement('p');
                emptyState.className = 'empty-state';
                emptyState.textContent = 'No tasks yet.';
                taskList.appendChild(emptyState);
            }
        }
    }
});