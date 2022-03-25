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
                    <input class="completed" type="checkbox">
                </div>
            </div>

            <div class="task__controls">
                <button class="task__btn important">
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
                    isEmpty();
                });

                cancelBtn.addEventListener('click', () => {
                    modalDelete.classList.add('_hide');
                });
            });
        });
    }); 
};

const toImportant = function(){
    const importantScreen = document.querySelector('.important-screen');
    screens.forEach((item) => {
        const screen = item;
        
        screen.addEventListener('DOMNodeInserted', () => {
            let tasksList = screen.querySelectorAll('.task');

            tasksList.forEach((item) => {
                const task = item;
                const importantBtn = task.querySelector('.important');

                importantBtn.addEventListener('click', () => {
                    importantScreen.appendChild(task);
                });
            });
        });
    });

    importantScreen.addEventListener('DOMNodeInserted', () => {
        const tasksScreen = document.querySelector('.tasks');
        let tasksList = importantScreen.querySelectorAll('.task');

        tasksList.forEach((item) => {
            const task = item;
            const importantBtn = task.querySelector('.important');

            importantBtn.addEventListener('click', () => {
                tasksScreen.appendChild(task);
            });
        });
    });
};

const toComplited = function() {
    const completedScreen = document.querySelector('.completed-screen');
    
    screens.forEach((item) => {
        const screen = item;
        
        screen.addEventListener('DOMNodeInserted', () => {
            let tasksList = screen.querySelectorAll('.task');

            tasksList.forEach((item) => {
                const task = item;
                const complitedBtn = task.querySelector('.completed');

                complitedBtn.addEventListener('click', () => {
                    console.log('check');
                    completedScreen.appendChild(task);
                });
            });
        });
    });

    completedScreen.addEventListener('DOMNodeInserted', () => {
        const tasksScreen = document.querySelector('.tasks');
        let tasksList = completedScreen.querySelectorAll('.task');

        tasksList.forEach((item) => {
            const task = item;
            const completedBtn = task.querySelector('.completed');

            completedBtn.addEventListener('click', () => {
                tasksScreen.appendChild(task);
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
    toImportant();
    toComplited();
}

app();