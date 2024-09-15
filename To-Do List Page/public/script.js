const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const todoList = document.getElementById('todo-list');

let tasks = [];

// Add task by clicking the button or pressing 'Enter'
addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});

function addTask() {
  const taskText = taskInput.value;
  if (taskText) {
    const task = {
      id: Date.now(),
      text: taskText,
      completed: false
    };
    tasks.push(task);
    renderTasks();
    taskInput.value = ''; // Clear input
  }
}

// Render tasks
function renderTasks() {
  todoList.innerHTML = ''; // Clear the list before rendering
  tasks.forEach(task => {
    const li = document.createElement('li');
    li.className = task.completed ? 'completed' : '';
    li.innerHTML = `
      <span>${task.text}</span>
      <div class="actions">
        <button onclick="toggleComplete(${task.id})">Complete</button>
        <button onclick="editTask(${task.id})">Edit</button>
        <button onclick="deleteTask(${task.id})">Delete</button>
      </div>
    `;
    todoList.appendChild(li);
  });
}

// Toggle complete task
function toggleComplete(id) {
  tasks = tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task);
  renderTasks();
}

// Edit task
function editTask(id) {
  const taskText = prompt('Edit the task:');
  if (taskText) {
    tasks = tasks.map(task => task.id === id ? { ...task, text: taskText } : task);
    renderTasks();
  }
}

// Delete task
function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  renderTasks();
}

// Fetch tasks from server on load
window.onload = () => {
    fetch('/api/tasks')
      .then(res => res.json())
      .then(data => {
        tasks = data;
        renderTasks();
      });
  };
  
  // Add new task
  addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value;
    if (taskText) {
      fetch('/api/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: taskText })
      })
      .then(res => res.json())
      .then(task => {
        tasks.push(task);
        renderTasks();
        taskInput.value = ''; // Clear input
      });
    }
  });
  
  