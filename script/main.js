const modal = document.querySelector('.modal');

const openModal = function() {
    const openModal = document.querySelector('.add-task');
    const closeModal = document.querySelector('.close-modal');

    openModal.addEventListener('click', () => {
        modal.classList.remove('_hide');
    });

    closeModal.addEventListener('click', () => {
        modal.classList.add('_hide');
    });
};

const addTask = function(){
    const tasks = document.querySelector('.tasks');
    const modalAdd = document.querySelector('.modal-add');
    const modalInput = document.querySelector('.modal-input');

    modalAdd.addEventListener('click', () => {
        let task = document.createElement('div');
        task.innerHTML = `
            <div class="task">
                <div class="task__text">
                    <div class="task__description">${modalInput.value}</div>

                    <div class="task__control">
                        <input type="checkbox">
                    </div>
                </div>

                <div class="task__controls">
                    <button class="task__btn" id="impotant">
                        <svg class="task__icon">
                            <use xlink:href="#important"></use>
                        </svg>
                    </button>
                    <button class="task__btn" id="delete">
                        <svg class="task__icon">
                            <use xlink:href="#delete"></use>
                        </svg>
                    </button>
            </div>`
        
        tasks.appendChild(task);
        modal.classList.add('_hide');
    })
}

const app = function() {
    openModal();
    addTask();
}

app();