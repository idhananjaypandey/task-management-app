// pages/index.js
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';

import { useState } from 'react';

export default function Home({ initialTasks }) {
  const [tasks, setTasks] = useState(initialTasks);

  // Add Task
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  // Edit Task
  const editTask = (id, updatedTask) => {
    setTasks(tasks.map(task => task.id === id ? updatedTask : task));
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Mark as Completed
  const toggleCompletion = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  return (
    <div>
      <nav className="navbar">
        <h2>Welcome To Task Manager</h2>
      </nav>
      
      <TaskList tasks={tasks} onToggleCompletion={toggleCompletion} onDelete={deleteTask} onEdit={editTask} />
      <TaskForm onAddTask={addTask} />
    </div>
  );
}

export async function getServerSideProps() {
  const tasks = [
    { id: 1, title: 'First Task', description: 'This is the first task', priority: 'high', completed: false },
    { id: 2, title: 'Second Task', description: 'This is the second task', priority: 'medium', completed: false },
    { id: 3, title: 'Third Task', description: 'This is the Third task', priority: 'low', completed: false },
    { id: 4, title: 'Fourth Task', description: 'This is the Fourth task', priority: 'medium', completed: false },
  ];

  return {
    props: {
      initialTasks: tasks,
    },
  };
}
