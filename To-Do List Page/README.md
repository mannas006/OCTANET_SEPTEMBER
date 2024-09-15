# To-Do List Application

This is a basic To-Do List web application that allows users to manage their tasks. Users can add, mark as complete, edit, and delete tasks. The project uses a simple front-end and back-end setup with Express.js, and it handles the data with a temporary in-memory storage.

## Features

- **Add New Tasks**: Users can add new tasks by clicking the "Add Task" button or pressing the "Enter" key.
- **Mark Tasks as Completed**: Users can mark tasks as completed, and the UI will reflect the task's completion status.
- **Edit Tasks**: Users can edit existing tasks.
- **Delete Tasks**: Users can delete tasks from the list.

## Technology Stack

- **Front-End**: HTML, CSS, JavaScript
- **Back-End**: Node.js, Express.js
- **Server-Side**: Express for serving static files and handling API routes

## Installation and Setup

### Prerequisites

- [Node.js](https://nodejs.org/en/) installed on your machine.

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/todo-list-app.git
   cd todo-list-app
   ```

2. **Install the dependencies**:
   ```bash
   npm install
   ```

3. **Run the server**:
   ```bash
   node server.js
   ```

4. Open your browser and visit `http://localhost:3000/` to view the app.

## API Endpoints

- `GET /api/tasks` - Retrieves the list of tasks.
- `POST /api/tasks` - Adds a new task.
- `PUT /api/tasks/:id` - Updates the task (mark as complete or edit).
- `DELETE /api/tasks/:id` - Deletes a task.

## Usage

- Open the web app.
- Type a task in the input field and press "Enter" or click the "Add Task" button to add it.
- Mark a task as completed by clicking the "Complete" button.
- Edit a task by clicking the "Edit" button.
- Delete a task by clicking the "Delete" button.

## Folder Structure

```bash
/public
   ├── index.html      # Front-end HTML
   ├── styles.css      # CSS styles
   └── script.js       # Front-end JavaScript
/server.js             # Node.js Express server
```

## Future Enhancements

- Persist tasks in a database instead of in-memory storage.
- Add user authentication to allow multiple users to manage their own task lists.
- Enhance the UI with more animations and transitions.

## License

This project is licensed under the MIT License.