const modal = document.querySelector('.modal');
const modalInput = document.querySelector('.modal-input');
const screens = document.querySelectorAll('.screen');

const openModal = function() {
    const openModal = document.querySelector('.add-task');
    const closeModal = document.querySelector('.close-modal');

    openModal.addEventListener('click', () => {
        modal.classList.remove('_hide');
    });

    closeModal.addEventListener('click', () => {
        modal.classList.add('_hide');
        modalInput.value = ' ';
    });
};

const addTask = function(){
    const tasks = document.querySelector('.tasks');
    const modalAdd = document.querySelector('.modal-add');

    modalAdd.addEventListener('click', () => {
        let task = document.createElement('div');
        task.classList.add('task')
        task.innerHTML = `
            <div class="task__text">
                <div class="task__description">${modalInput.value}</div>

                <div class="task__control">
                    <input type="checkbox">
                </div>
            </div>

            <div class="task__controls">
                <button class="task__btn" class="impotant">
                    <svg class="task__icon">
                        <use xlink:href="#important"></use>
                    </svg>
                </button>
                <button class="task__btn delete-task">
                    <svg class="task__icon">
                        <use xlink:href="#delete"></use>
                    </svg>
                </button>`;
        
        tasks.appendChild(task);
        modal.classList.add('_hide');
        modalInput.value = '';
    });
};

const toggleTabs = function() {
    const btns = document.querySelectorAll('.menu__item');

    btns.forEach((item) => {
        item.addEventListener('click', () => {
            let currentBtn = item;
            let tab = currentBtn.getAttribute('data-type');
            let currentTab = document.querySelector(tab);

            btns.forEach((item) => {
                item.classList.remove('active');
            });

            screens.forEach((item) => {
                item.classList.add('_hide');
            });

            currentBtn.classList.add('active');
            currentTab.classList.remove('_hide');
        });
    });
};

const isEmpty = function() {
    screens.forEach((item) => {
        let tasksList = item.querySelectorAll('.task');
        let empty = document.createElement('div');
        empty.innerHTML = `
            <div class="empty">
                <svg class="empty-icon">
                    <use xlink:href="#folder"></use>
                </svg>
                <p class="empty-text">Пусто</p>
            </div>
        `;

        if(tasksList.length === 0){
            item.appendChild(empty);
        };

        item.addEventListener('DOMNodeInserted', () => {
            item.removeChild(empty);
        });

        // item.addEventListener('DOMNodeRemoved', (event) => {
        //     if(tasksList.length === 0){
        //         console.log(tasksList.length);
        //     };
        // });
    });
};

const deleteTask = function(){
    const tasks = document.querySelector('.tasks');
    const modalDelete = document.querySelector('._delete');
    const deleteBtn = document.querySelector('.delete-modal');
    const cancelBtn = document.querySelector('.cancel')

    let tasksList;
    
    tasks.addEventListener('DOMNodeInserted', () => {
        tasksList = tasks.querySelectorAll('.task');

        tasksList.forEach((item) => {
            const openModal = item.querySelector('.delete-task');

            openModal.addEventListener('click', () => {
                modalDelete.classList.remove('_hide');

                deleteBtn.addEventListener('click', () => {
                    item.remove();
                    modalDelete.classList.add('_hide');
                });

                cancelBtn.addEventListener('click', () => {
                    modalDelete.classList.add('_hide');
                });
            });
        });
    }); 
};

const app = function() {
    openModal();
    addTask();
    toggleTabs();
    isEmpty();
    deleteTask();
}

app();