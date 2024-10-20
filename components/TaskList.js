import React, { useState, useEffect } from 'react';

const TaskList = ({ tasks, onToggleCompletion, onDelete, onEdit }) => {
  const [editingTaskId, setEditingTaskId] = useState(null); // Track which task is being edited
  const [editedTask, setEditedTask] = useState({
    title: '',
    description: '',
    priority: 'low',
  });

  const [alertMessage, setAlertMessage] = useState(""); // State to hold the alert message

  // Sorting function to prioritize tasks by completion status (incomplete first) and then by priority: high > medium > low
  const sortedTasks = tasks.sort((a, b) => {
    if (a.completed !== b.completed) {
      return a.completed ? 1 : -1; // Completed tasks come later
    }
    const priorityOrder = { high: 3, medium: 2, low: 1 };
    return priorityOrder[b.priority || 'low'] - priorityOrder[a.priority || 'low'];
  });

  // Function to handle alert messages and clear them after a few seconds
  const showAlert = (message) => {
    setAlertMessage(message);
    setTimeout(() => {
      setAlertMessage(""); // Clear the message after 3 seconds
    }, 3000);
  };

  // Handle the changes during editing
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedTask({ ...editedTask, [name]: value });
  };

  // Start editing
  const startEditing = (task) => {
    setEditingTaskId(task.id);
    setEditedTask({
      title: task.title,
      description: task.description,
      priority: task.priority,
    });
  };

  // Save edited task
  const saveEdit = (id) => {
    onEdit(id, { ...editedTask, id, completed: tasks.find(task => task.id === id).completed });
    setEditingTaskId(null); // Reset editing mode
    showAlert("Task edited successfully!");
  };

  // Render the alert message if it exists
  const renderAlert = () => {
    if (alertMessage) {
      return <div className="alert">{alertMessage}</div>;
    }
    return null;
  };

  return (
    <div>
      {renderAlert()}
      <ul className="task-list">
        {sortedTasks.map((task) => (
          <li key={task.id} className={`task ${task.priority || 'low'}`}>
            {editingTaskId === task.id ? (
              <div>
                {/* Task Editing Section */}
                <input
                  className="task-input"
                  type="text"
                  name="title"
                  value={editedTask.title}
                  onChange={handleEditChange}
                />
                <textarea
                  name="description"
                  value={editedTask.description}
                  onChange={handleEditChange}
                  className="task-description"
                ></textarea>
                <select
                  name="priority"
                  value={editedTask.priority}
                  onChange={handleEditChange}
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
                <button className="btn-edit save-btn" onClick={() => saveEdit(task.id)}>Save</button>
                <button className="btn-edit delete-btn" onClick={() => setEditingTaskId(null)}>Cancel</button>
              </div>
            ) : (
              <div>
                {/* Task Display Section */}
                <h3 className="task-header">{task.title}</h3>
                <p className="task-description">{task.description}</p>
                <p className={`task-priority ${task.priority}`}>
                  Priority: {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
                </p>
                {/* Task Status */}
                <p className="task-status">
                  Status: {task.completed ? 'Completed' : 'Pending'}
                </p>
                <div className="task-actions">
                  <button className="toggle-btn" onClick={() => { onToggleCompletion(task.id); showAlert("Action Performed successfully!"); }}>
                    {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
                  </button>
                  <button className="edit-btn" onClick={() => startEditing(task)}>Edit</button>
                  <button className="delete-btn" onClick={() => { onDelete(task.id); showAlert("Task deleted successfully!"); }}>Delete</button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
