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
              <span>Edit</span>
              <span>Move</span>
            </div>
          </div>
        `;
            taskList.appendChild(card);
            input.value = '';
            if (emptyState) emptyState.style.display = 'none';
        }
    });
});