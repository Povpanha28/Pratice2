const taskInput = document.getElementById('taskInput');
const prioritySelect = document.getElementById('prioritySelect');
const addTaskBtn = document.getElementById('addTask');
const allbtn = document.getElementById('all');
const displayTask = document.getElementById('displayTask');
const highbtn = document.getElementById('high');
const lowbtn = document.getElementById('low');


let tasks = [
    ];
    addTaskBtn.addEventListener('click', function () {
        const newTask = {
            description: taskInput.value,
            priority: parseInt(prioritySelect.value), // Convert to number
        };
    
        tasks.push(newTask); // Add new task to the array
    
        displayTask.innerHTML = ''; // Clear previous tasks
    
        // Re-render all tasks
        tasks.forEach(task => {
            const taskDiv = document.createElement('div');
            taskDiv.innerHTML = `<h3>${task.description}</h3>`;
            taskDiv.style.backgroundColor = task.priority === 1 ? 'red' : 'gray';
            taskDiv.classList.add('box');
            displayTask.appendChild(taskDiv);
        });
        taskInput.value = ''; // Clear input
    });
    

allbtn.addEventListener('click', function () {
    displayTask.innerHTML = ''; // Clear previous tasks
    tasks.forEach(task => {
        const newDiv = document.createElement('div');
        newDiv.innerHTML = `<h3>${task.description}</h3>`;
        newDiv.style.backgroundColor = task.priority === 1 ? 'red' : 'gray';
        newDiv.classList.add('box');
        displayTask.appendChild(newDiv);
    });
});

highbtn.addEventListener('click', function () {
    displayTask.innerHTML = ''; // Clear previous tasks
    tasks.forEach(task => {
        if (task.priority === 1) {
            const newDiv = document.createElement('div');
            newDiv.innerHTML = `<h3>${task.description}</h3>`;
            newDiv.style.backgroundColor = task.priority === 1 ? 'red' : 'gray';
            newDiv.classList.add('box');
            displayTask.appendChild(newDiv);
        }
    });
})

lowbtn.addEventListener('click', function () {
    displayTask.innerHTML = ''; // Clear previous tasks
    tasks.forEach(task => {
        if (task.priority === 0) {
            const newDiv = document.createElement('div');
            newDiv.innerHTML = `<h3>${task.description}</h3>`;
            newDiv.style.backgroundColor = task.priority === 1 ? 'red' : 'gray';
            newDiv.classList.add('box');
            displayTask.appendChild(newDiv);
        }
    });
}) ;




