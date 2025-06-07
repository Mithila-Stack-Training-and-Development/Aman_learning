// Selectors
const taskTitleInput = document.getElementById('task-title');
const taskPrioritySelect = document.getElementById('task-priority');
const taskDueDateInput = document.getElementById('task-due-date');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');
const filterStatus = document.getElementById('filter-status');
const filterPriority = document.getElementById('filter-priority');
const searchTask = document.getElementById('search-task');
const themeToggleBtn = document.getElementById('theme-toggle');

const totalTasksSpan = document.getElementById('total-tasks');
const completedTasksSpan = document.getElementById('completed-tasks');
const pendingTasksSpan = document.getElementById('pending-tasks');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let isEditing = false;
let editingTaskId = null;

// Utility functions

// Save tasks to localStorage
function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Generate unique ID
function generateId() {
  return Date.now().toString() + Math.random().toString(16).slice(2);
}

// Format date as YYYY-MM-DD → readable string
function formatDate(dateStr) {
  if (!dateStr) return '';
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  const d = new Date(dateStr + 'T00:00:00'); // to avoid timezone shift
  return d.toLocaleDateString(undefined, options);
}

// Check if due date is overdue
function isOverdue(dateStr) {
  if (!dateStr) return false;
  const today = new Date();
  const dueDate = new Date(dateStr + 'T23:59:59');
  return dueDate < today && !isTaskCompleted;
}

// Render tasks to DOM with filters applied
function renderTasks() {
  // Clear current list
  taskList.innerHTML = '';

  // Get filter values
  const statusFilter = filterStatus.value;
  const priorityFilter = filterPriority.value;
  const searchQuery = searchTask.value.trim().toLowerCase();

  // Filter tasks
  let filteredTasks = tasks.filter(task => {
    // Filter by status
    if (statusFilter === 'completed' && !task.completed) return false;
    if (statusFilter === 'pending' && task.completed) return false;

    // Filter by priority
    if (priorityFilter !== 'all' && task.priority !== priorityFilter) return false;

    // Filter by search query
    if (searchQuery && !task.title.toLowerCase().includes(searchQuery)) return false;

    return true;
  });

  // Update stats
  totalTasksSpan.textContent = `Total: ${tasks.length}`;
  completedTasksSpan.textContent = `Completed: ${tasks.filter(t => t.completed).length}`;
  pendingTasksSpan.textContent = `Pending: ${tasks.filter(t => !t.completed).length}`;

  // If no tasks show a friendly message
  if (filteredTasks.length === 0) {
    const li = document.createElement('li');
    li.textContent = 'No tasks found.';
    li.style.textAlign = 'center';
    li.style.color = '#888';
    taskList.appendChild(li);
    return;
  }

  // Render each task
  filteredTasks.forEach(task => {
    const li = document.createElement('li');
    li.className = 'task-item added';
    li.draggable = true;
    li.dataset.id = task.id;

    if (task.completed) li.classList.add('completed');

    // Task Left section: priority dot + title + due date
    const leftDiv = document.createElement('div');
    leftDiv.className = 'task-left';

    const priorityDot = document.createElement('span');
    priorityDot.className = `priority-dot priority-${task.priority}`;
    leftDiv.appendChild(priorityDot);

    const titleSpan = document.createElement('span');
    titleSpan.className = 'task-title';
    titleSpan.textContent = task.title;
    leftDiv.appendChild(titleSpan);

    if (task.dueDate) {
      const dueDateSpan = document.createElement('span');
      dueDateSpan.className = 'due-date';
      const overdue = new Date(task.dueDate + 'T23:59:59') < new Date() && !task.completed;
      if (overdue) dueDateSpan.classList.add('overdue');
      dueDateSpan.textContent = formatDate(task.dueDate);
      leftDiv.appendChild(dueDateSpan);
    }

    li.appendChild(leftDiv);

    // Action buttons
    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'task-actions';

    // Complete button
    const completeBtn = document.createElement('button');
    completeBtn.className = 'complete-btn';
    completeBtn.innerHTML = task.completed ? '↩️' : '✔️';
    completeBtn.title = task.completed ? 'Mark as Pending' : 'Mark as Completed';
    completeBtn.addEventListener('click', () => toggleComplete(task.id));
    actionsDiv.appendChild(completeBtn);

    // Edit button
    const editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    editBtn.innerHTML = '✏️';
    editBtn.title = 'Edit Task';
    editBtn.addEventListener('click', () => startEditing(task.id));
    actionsDiv.appendChild(editBtn);

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.innerHTML = '🗑️';
    deleteBtn.title = 'Delete Task';
    deleteBtn.addEventListener('click', () => deleteTask(task.id));
    actionsDiv.appendChild(deleteBtn);

    li.appendChild(actionsDiv);

    // Drag & Drop Events
    li.addEventListener('dragstart', dragStart);
    li.addEventListener('dragover', dragOver);
    li.addEventListener('drop', dragDrop);
    li.addEventListener('dragend', dragEnd);

    taskList.appendChild(li);
  });
}

// Add new task or update existing task
function addOrUpdateTask() {
  const title = taskTitleInput.value.trim();
  const priority = taskPrioritySelect.value;
  const dueDate = taskDueDateInput.value;

  if (title === '') {
    alert('Task title cannot be empty!');
    return;
  }

  if (isEditing) {
    // Update existing task
    tasks = tasks.map(task => {
      if (task.id === editingTaskId) {
        return { ...task, title, priority, dueDate };
      }
      return task;
    });
    isEditing = false;
    editingTaskId = null;
    addTaskBtn.textContent = 'Add Task';
  } else {
    // Add new task
    tasks.push({
      id: generateId(),
      title,
      priority,
      dueDate,
      completed: false,
    });
  }

  clearInputs();
  saveTasks();
  renderTasks();
}

function clearInputs() {
  taskTitleInput.value = '';
  taskPrioritySelect.value = 'low';
  taskDueDateInput.value = '';
}

// Toggle complete/pending
function toggleComplete(id) {
  tasks = tasks.map(task =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );
  saveTasks();
  renderTasks();
}

// Delete task
function deleteTask(id) {
  if (confirm('Delete this task?')) {
    tasks = tasks.filter(task => task.id !== id);
    saveTasks();
    renderTasks();
  }
}

// Start editing task
function startEditing(id) {
  const task = tasks.find(t => t.id === id);
  if (!task) return;

  taskTitleInput.value = task.title;
  taskPrioritySelect.value = task.priority;
  taskDueDateInput.value = task.dueDate || '';

  isEditing = true;
  editingTaskId = id;
  addTaskBtn.textContent = 'Update Task';
  taskTitleInput.focus();
}

// Drag & Drop handlers
let draggedElement = null;

function dragStart(e) {
  draggedElement = e.currentTarget;
  e.dataTransfer.effectAllowed = 'move';
  e.currentTarget.style.opacity = '0.5';
}

function dragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';

  const target = e.currentTarget;
  if (target && target !== draggedElement) {
    const bounding = target.getBoundingClientRect();
    const offset = e.clientY - bounding.top;
    if (offset > bounding.height / 2) {
      target.style['border-bottom'] = '3px solid #ff3e00';
      target.style['border-top'] = '';
    } else {
      target.style['border-top'] = '3px solid #ff3e00';
      target.style['border-bottom'] = '';
    }
  }
}

function dragDrop(e) {
  e.preventDefault();
  const target = e.currentTarget;

  if (target && target !== draggedElement) {
    // Remove borders
    target.style['border-top'] = '';
    target.style['border-bottom'] = '';

    const draggedId = draggedElement.dataset.id;
    const targetId = target.dataset.id;

    const draggedIndex = tasks.findIndex(t => t.id === draggedId);
    const targetIndex = tasks.findIndex(t => t.id === targetId);

    // Determine insert position
    const bounding = target.getBoundingClientRect();
    const offset = e.clientY - bounding.top;
    let insertAt = targetIndex;
    if (offset > bounding.height / 2) insertAt = targetIndex + 1;

    // Remove dragged task
    const [draggedTask] = tasks.splice(draggedIndex, 1);

    // Insert dragged task at new position
    tasks.splice(insertAt > draggedIndex ? insertAt - 1 : insertAt, 0, draggedTask);

    saveTasks();
    renderTasks();
  }
}

function dragEnd(e) {
  e.currentTarget.style.opacity = '1';
  document.querySelectorAll('.task-item').forEach(item => {
    item.style['border-top'] = '';
    item.style['border-bottom'] = '';
  });
}

// Theme toggle
function toggleTheme() {
  document.body.classList.toggle('dark-mode');
  // Store theme preference
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
    themeToggleBtn.textContent = '☀️';
  } else {
    localStorage.setItem('theme', 'light');
    themeToggleBtn.textContent = '🌙';
  }
}

// Load theme from localStorage
function loadTheme() {
  const theme = localStorage.getItem('theme');
  if (theme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggleBtn.textContent = '☀️';
  } else {
    themeToggleBtn.textContent = '🌙';
  }
}

// Event listeners
addTaskBtn.addEventListener('click', addOrUpdateTask);

filterStatus.addEventListener('change', renderTasks);
filterPriority.addEventListener('change', renderTasks);
searchTask.addEventListener('input', renderTasks);

themeToggleBtn.addEventListener('click', toggleTheme);

taskTitleInput.addEventListener('keyup', e => {
  if (e.key === 'Enter') addOrUpdateTask();
});

// Initial load
loadTheme();
renderTasks();
