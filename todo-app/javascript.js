// Obtener elementos del DOM
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Evento para agregar tarea
addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();

    // Evitar tareas vacías
    if (!taskText) return;

    // Crear elemento <li>
    const li = document.createElement('li');

    // Insertar contenido correctamente (template string)
    li.innerHTML = `
        <span>${taskText}</span>
        <div>
            <button class="completeBtn">Completar</button>
            <button class="deleteBtn">Eliminar</button>
        </div>
    `;

    // Agregar tarea a la lista
    taskList.appendChild(li);

    // Limpiar input
    taskInput.value = '';

    // Botones dentro del <li>
    const completeBtn = li.querySelector('.completeBtn');
    const deleteBtn = li.querySelector('.deleteBtn');

    // Marcar como completada
    completeBtn.addEventListener('click', () => {
        li.querySelector('span').classList.toggle('completed');
    });

    // Eliminar tarea
    deleteBtn.addEventListener('click', () => {
        li.remove();
    });
});


/**const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

 /*---------- EVENTS ---------- 

addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') addTask();
});

taskList.addEventListener('click', handleTaskAction);

 /*---------- FUNCTIONS ---------- 

function addTask() {
    const text = taskInput.value.trim();
    if (!text) return;

    tasks.push({
        id: Date.now(),
        text,
        completed: false
    });

    taskInput.value = '';
    saveAndRender();
}

function handleTaskAction(e) {
    const id = e.target.closest('li')?.dataset.id;
    if (!id) return;

    if (e.target.classList.contains('toggle')) {
        toggleTask(id);
    }

    if (e.target.classList.contains('delete')) {
        deleteTask(id);
    }
}

function toggleTask(id) {
    tasks = tasks.map(task =>
        task.id == id ? { ...task, completed: !task.completed } : task
    );
    saveAndRender();
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id != id);
    saveAndRender();
}

function saveAndRender() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    render();
}

function render() {
    taskList.innerHTML = '';

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.dataset.id = task.id;
        li.className = task.completed ? 'completed' : '';

        const span = document.createElement('span');
        span.textContent = task.text;

        const toggleBtn = document.createElement('button');
        toggleBtn.textContent = '✔';
        toggleBtn.className = 'toggle';

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '✖';
        deleteBtn.className = 'delete';

        li.append(span, toggleBtn, deleteBtn);
        taskList.appendChild(li);
    });
}

render();
**/
