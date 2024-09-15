const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));

let tasks = [];

// Fetch tasks
app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

// Add a new task
app.post('/api/tasks', (req, res) => {
  const task = { id: Date.now(), text: req.body.text, completed: false };
  tasks.push(task);
  res.json(task);
});

// Update task (complete or edit)
app.put('/api/tasks/:id', (req, res) => {
  const { id } = req.params;
  const { text, completed } = req.body;
  tasks = tasks.map(task => task.id === parseInt(id) ? { ...task, text, completed } : task);
  res.json({ success: true });
});

// Delete task
app.delete('/api/tasks/:id', (req, res) => {
  const { id } = req.params;
  tasks = tasks.filter(task => task.id !== parseInt(id));
  res.json({ success: true });
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
